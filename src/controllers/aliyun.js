const {
    getResponse
} = require('../helpers')

const Aliyun = require('aliyun-sdk')
const crypto = require('crypto')
const urllib = require('urllib')

const env = process.env.NODE_ENV || 'development'
const ALIYUNOSSCONFIG = {
    development: {
        accessKeyId: "",
        secretAccessKey: "",
        accountId: '',
        bucket: 'xx',
        // 授权访问的资源表达式
        // 如果允许用户操作整个 Bucket, 则为 bucket_name/*
        // 如果允许用户操作某个文件夹, 则为 bucket_name/path/to/folder/*
        // 如果仅允许用户上传到某个具体文件, 则为 bucket_name/path/to/folder/file
        // resource: 'xbinstitute-test/*'
        resource: 'xx/*'
    },
    test: {
        accessKeyId: "",
        secretAccessKey: "",
        accountId: '',
        bucket: 'xx',
        resource: 'xx/*'
    },
    production: {
        accessKeyId: "",
        secretAccessKey: "",
        accountId: '',
        bucket: 'xx',
        resource: 'xx/*'
    }
}

const {
    bucket,
    accountId,
    resource,
    accessKeyId,
    secretAccessKey
} = ALIYUNOSSCONFIG[env]

const getAliyunSignature = function(config) {
    // 权限配置，可以不填，默认就是账户所有权限
    let policy = {
        Version: "1",
        Statement: [{
            Effect: "Allow",
            Action: ["oss:PutObject", "oss:CreateMultipartUpload", "oss:UploadPart", "oss:CompleteMultipartUpload"],
            Resource: [`acs:oss:*:${accountId}:${resource}`]
        }]
    }

    let body = {
        RoleArn: `acs:ram::${accountId}:role/${bucket}-ossupload-role`,
        RoleSessionName: bucket,
        DurationSeconds: 1000,
        Action: 'AssumeRole',
        Policy: JSON.stringify(policy)
    }

    var date = Aliyun.util.date.getDate();

    body.Format = "JSON";
    body.Version = "2015-04-01";
    body.AccessKeyId = accessKeyId;
    body.SignatureVersion = "1.0";
    body.SignatureMethod = "HMAC-SHA1";
    body.SignatureNonce = String(date.getTime()) + randomNumbers(4);
    body.Timestamp = Aliyun.util.date.iso8601(date);

    // sign
    var headers = [];

    Aliyun.util.each(body, function(name) {
        headers.push(name);
    });

    headers.sort(function(a, b) {
        return a < b ? -1 : 1;
    });

    var canonicalizedQueryString = "";
    Aliyun.util.arrayEach.call(this, headers, function(name) {
        canonicalizedQueryString += "&" + name + "=" + Aliyun.util.popEscape(body[name]);
    });

    var stringToSign = 'POST&%2F&' + Aliyun.util.popEscape(canonicalizedQueryString.substr(1));
    body.Signature = Aliyun.util.crypto.hmac(`${secretAccessKey}&`, stringToSign, 'base64', 'sha1');
    return body;
};

const randomNumbers = (count) => {
    var num = '';
    for (var i = 0; i < count; i++) {
        num += Math.floor(Math.random() * 10);
    }
    return num;
}

const ossStsToken = async(ctx, next) => {

    const stsParams = getAliyunSignature({
      accessKeyId,
      secretAccessKey
    })

    // 此处没有使用superagent,原因是改成superagent后报bad request,猜测是params参数格式没有传递正确，留待解决
    let res = await urllib.request('https://sts.aliyuncs.com', {
        method: 'POST',
        data: stsParams,
        dataType: 'json'
    })

    if (res && res.status === 200) {
        ctx.body = getResponse(true,res.data||{})
    } else {
        ctx.body = getResponse(false,'')

    }
}

const uploadToOSS = async (buffer, key) => {
    const oss = new Aliyun.OSS({
        accessKeyId,
        secretAccessKey,
        endpoint: 'http://oss-cn-hangzhou.aliyuncs.com',
        // 这是 oss sdk 目前支持最新的 api 版本, 不需要修改
        apiVersion: '2013-10-15'
    })

    return new Promise(async resolve=>{
      await oss.putObject({
          Bucket: bucket,
          Key: key, // 注意, Key 的值不能以 / 开头, 否则会返回错误.
          Body: buffer,
          AccessControlAllowOrigin: '',
          ContentType: 'image/png',
          CacheControl: 'public', // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9
          ContentDisposition: '', // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1
          ContentEncoding: 'utf-8', // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11
          ServerSideEncryption: 'AES256',
          Expires: null // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21
      }, (err, data) => {
          if (err) {
              console.log('error:', err)
              return
          }
          resolve()
      })
    })
}

module.exports = {
    ossStsToken,
    getAliyunSignature,
    uploadToOSS,
}
