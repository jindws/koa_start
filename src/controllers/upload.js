const aliyun = require('./aliyun')
const fs = require('fs');
const uuidv1 = require('uuid/v1');
const {getResponse} = require('../helpers')

const create = async ctx =>{
      await _operate(ctx.request.files[0])
      .then(async src=>{
          ctx.body = getResponse(true,{
              src,
          })
      })
}

const _operate = async fileReadStream=>{
    const {path,filename} = fileReadStream
    const src = `xxx`
    const link = `//xxx/${src}`

    return new Promise(async (resolve,reject)=>{
        // await fs.readFile(path,async(err,data)=>{
        //     await aliyun.uploadToOSS(data,src).then(()=>{
        //         resolve(`/homework/upload/${filename}`)
        //         fs.unlink(path, function(err){
        //             if(err){
        //                 throw err;
        //             }
        //         })
        //     },reject)
        // })

        const content =  fs.readFileSync(path);

        await aliyun.uploadToOSS(content,src).then(()=>{
            resolve(`/homework/upload/${filename}`)
                fs.unlink(path, function(err){
                 if(err){
                     throw err;
                 }
             })
        },reject)

    })
}

module.exports = {
    create,
}
