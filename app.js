/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/uuid/lib/bytesToUuid.js":
/*!********************************************************!*\
  !*** /Users/moia/node_modules/uuid/lib/bytesToUuid.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\nvar byteToHex = [];\nfor (var i = 0; i < 256; ++i) {\n  byteToHex[i] = (i + 0x100).toString(16).substr(1);\n}\n\nfunction bytesToUuid(buf, offset) {\n  var i = offset || 0;\n  var bth = byteToHex;\n  return bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]];\n}\n\nmodule.exports = bytesToUuid;\n\n//# sourceURL=webpack:////Users/moia/node_modules/uuid/lib/bytesToUuid.js?");

/***/ }),

/***/ "../../../node_modules/uuid/lib/rng.js":
/*!************************************************!*\
  !*** /Users/moia/node_modules/uuid/lib/rng.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Unique ID creation requires a high quality random # generator.  In node.js\n// this is pretty straight-forward - we use the crypto API.\n\nvar crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nmodule.exports = function nodeRNG() {\n  return crypto.randomBytes(16);\n};\n\n//# sourceURL=webpack:////Users/moia/node_modules/uuid/lib/rng.js?");

/***/ }),

/***/ "../../../node_modules/uuid/v1.js":
/*!*******************************************!*\
  !*** /Users/moia/node_modules/uuid/v1.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var rng = __webpack_require__(/*! ./lib/rng */ \"../../../node_modules/uuid/lib/rng.js\");\nvar bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ \"../../../node_modules/uuid/lib/bytesToUuid.js\");\n\n// **`v1()` - Generate time-based UUID**\n//\n// Inspired by https://github.com/LiosK/UUID.js\n// and http://docs.python.org/library/uuid.html\n\nvar _nodeId;\nvar _clockseq;\n\n// Previous uuid creation time\nvar _lastMSecs = 0;\nvar _lastNSecs = 0;\n\n// See https://github.com/broofa/node-uuid for API details\nfunction v1(options, buf, offset) {\n  var i = buf && offset || 0;\n  var b = buf || [];\n\n  options = options || {};\n  var node = options.node || _nodeId;\n  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;\n\n  // node and clockseq need to be initialized to random values if they're not\n  // specified.  We do this lazily to minimize issues related to insufficient\n  // system entropy.  See #189\n  if (node == null || clockseq == null) {\n    var seedBytes = rng();\n    if (node == null) {\n      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)\n      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];\n    }\n    if (clockseq == null) {\n      // Per 4.2.2, randomize (14 bit) clockseq\n      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;\n    }\n  }\n\n  // UUID timestamps are 100 nano-second units since the Gregorian epoch,\n  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so\n  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'\n  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.\n  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();\n\n  // Per 4.2.1.2, use count of uuid's generated during the current clock\n  // cycle to simulate higher resolution clock\n  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;\n\n  // Time since last uuid creation (in msecs)\n  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000;\n\n  // Per 4.2.1.2, Bump clockseq on clock regression\n  if (dt < 0 && options.clockseq === undefined) {\n    clockseq = clockseq + 1 & 0x3fff;\n  }\n\n  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new\n  // time interval\n  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {\n    nsecs = 0;\n  }\n\n  // Per 4.2.1.2 Throw error if too many uuids are requested\n  if (nsecs >= 10000) {\n    throw new Error('uuid.v1(): Can\\'t create more than 10M uuids/sec');\n  }\n\n  _lastMSecs = msecs;\n  _lastNSecs = nsecs;\n  _clockseq = clockseq;\n\n  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch\n  msecs += 12219292800000;\n\n  // `time_low`\n  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;\n  b[i++] = tl >>> 24 & 0xff;\n  b[i++] = tl >>> 16 & 0xff;\n  b[i++] = tl >>> 8 & 0xff;\n  b[i++] = tl & 0xff;\n\n  // `time_mid`\n  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;\n  b[i++] = tmh >>> 8 & 0xff;\n  b[i++] = tmh & 0xff;\n\n  // `time_high_and_version`\n  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version\n  b[i++] = tmh >>> 16 & 0xff;\n\n  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)\n  b[i++] = clockseq >>> 8 | 0x80;\n\n  // `clock_seq_low`\n  b[i++] = clockseq & 0xff;\n\n  // `node`\n  for (var n = 0; n < 6; ++n) {\n    b[i + n] = node[n];\n  }\n\n  return buf ? buf : bytesToUuid(b);\n}\n\nmodule.exports = v1;\n\n//# sourceURL=webpack:////Users/moia/node_modules/uuid/v1.js?");

/***/ }),

/***/ "./config/development.js":
/*!*******************************!*\
  !*** ./config/development.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * LOCAL 本地开发\n */\nconst port = Number.parseInt(Object({\"NODE_ENV\":\"test\"}).PORT) || 8080;\nconst mongoUri = \"\";\nconst mongoUriParam = '';\n\nconst cdnHostName = '';\n\nmodule.exports = {\n    port,\n    mongoUri,\n    mongoUriParam: \"authSource=admin\",\n    // 存放session的库和表配置\n    sessionURL: {\n        url: `${mongoUri}/?${mongoUriParam}`,\n        db: 'koa',\n        collection: 'sessions',\n        // 这里设置的是数据库session定期清除的时间，与cookie的过期时间应保持一致，cookie由浏览器负责定时清除，需要注意的是索引一旦建立修改的时候需要删除旧的索引。此处的时间是秒为单位，cookie的maxAge是毫秒为单位\n        maxAge: 24 * 60 * 60\n    },\n    // 引用资源的cdn路径\n    cdnHostName,\n    // 打包完成发布上线的cdn前缀\n    jsVersion: `https://${cdnHostName}/xx/xx/20180622`\n};\n\n//# sourceURL=webpack:///./config/development.js?");

/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 本地开发\nvar development = __webpack_require__(/*! ./development */ \"./config/development.js\");\n// 测试环境\nvar test = __webpack_require__(/*! ./test */ \"./config/test.js\");\n// 正式环境\nvar production = __webpack_require__(/*! ./production */ \"./config/production.js\");\n\nvar env = \"test\" || 'development';\n\nconsole.log(env);\nvar configs = {\n    test,\n    development,\n    production\n};\n\nvar defaultConfig = {\n    env\n};\n\nconst config = Object.assign({}, defaultConfig, configs[env]);\n\nmodule.exports = config;\n\n//# sourceURL=webpack:///./config/index.js?");

/***/ }),

/***/ "./config/production.js":
/*!******************************!*\
  !*** ./config/production.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * 正式服务器配置\n */\nconst port = Number.parseInt(Object({\"NODE_ENV\":\"test\"}).PORT) || 8080;\nconst mongoUri = '';\nconst mongoUriParam = '';\n\nconst cdnHostName = '';\n\nmodule.exports = {\n    port,\n    mongoUri,\n    mongoUriParam: \"authSource=admin\",\n    // 存放session的库和表配置\n    sessionURL: {\n        url: `${mongoUri}/?${mongoUriParam}`,\n        db: 'koa',\n        collection: 'sessions',\n        // 这里设置的是数据库session定期清除的时间，与cookie的过期时间应保持一致，cookie由浏览器负责定时清除，需要注意的是索引一旦建立修改的时候需要删除旧的索引。此处的时间是秒为单位，cookie的maxAge是毫秒为单位\n        maxAge: 24 * 60 * 60\n    },\n    // 引用资源的cdn路径\n    cdnHostName,\n    // 打包完成发布上线的cdn前缀\n    jsVersion: `https://${cdnHostName}/xx/xx/20180622`\n};\n\n//# sourceURL=webpack:///./config/production.js?");

/***/ }),

/***/ "./config/test.js":
/*!************************!*\
  !*** ./config/test.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * 测试服务器配置\n */\nconst port = Number.parseInt(Object({\"NODE_ENV\":\"test\"}).PORT) || 8080;\nconst mongoUri = '';\nconst mongoUriParam = '';\n\nconst cdnHostName = '';\n\nmodule.exports = {\n    port,\n    mongoUri,\n    mongoUriParam: \"authSource=admin\",\n    // 存放session的库和表配置\n    sessionURL: {\n        url: `${mongoUri}/?${mongoUriParam}`,\n        db: 'koa',\n        collection: 'sessions',\n        // 这里设置的是数据库session定期清除的时间，与cookie的过期时间应保持一致，cookie由浏览器负责定时清除，需要注意的是索引一旦建立修改的时候需要删除旧的索引。此处的时间是秒为单位，cookie的maxAge是毫秒为单位\n        maxAge: 24 * 60 * 60\n    },\n    // 引用资源的cdn路径\n    cdnHostName,\n    // 打包完成发布上线的cdn前缀\n    jsVersion: `https://${cdnHostName}/xx/xx/20180622`\n};\n\n//# sourceURL=webpack:///./config/test.js?");

/***/ }),

/***/ "./src/controllers/aliyun.js":
/*!***********************************!*\
  !*** ./src/controllers/aliyun.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nconst {\n    getResponse\n} = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\nconst Aliyun = __webpack_require__(/*! aliyun-sdk */ \"aliyun-sdk\");\nconst crypto = __webpack_require__(/*! crypto */ \"crypto\");\nconst urllib = __webpack_require__(/*! urllib */ \"urllib\");\n\nconst env = \"test\" || 'development';\nconst ALIYUNOSSCONFIG = {\n    development: {\n        accessKeyId: \"\",\n        secretAccessKey: \"\",\n        accountId: '',\n        bucket: 'xx',\n        // 授权访问的资源表达式\n        // 如果允许用户操作整个 Bucket, 则为 bucket_name/*\n        // 如果允许用户操作某个文件夹, 则为 bucket_name/path/to/folder/*\n        // 如果仅允许用户上传到某个具体文件, 则为 bucket_name/path/to/folder/file\n        // resource: 'xbinstitute-test/*'\n        resource: 'xx/*'\n    },\n    test: {\n        accessKeyId: \"\",\n        secretAccessKey: \"\",\n        accountId: '',\n        bucket: 'xx',\n        resource: 'xx/*'\n    },\n    production: {\n        accessKeyId: \"\",\n        secretAccessKey: \"\",\n        accountId: '',\n        bucket: 'xx',\n        resource: 'xx/*'\n    }\n};\n\nconst {\n    bucket,\n    accountId,\n    resource,\n    accessKeyId,\n    secretAccessKey\n} = ALIYUNOSSCONFIG[env];\n\nconst getAliyunSignature = function (config) {\n    // 权限配置，可以不填，默认就是账户所有权限\n    let policy = {\n        Version: \"1\",\n        Statement: [{\n            Effect: \"Allow\",\n            Action: [\"oss:PutObject\", \"oss:CreateMultipartUpload\", \"oss:UploadPart\", \"oss:CompleteMultipartUpload\"],\n            Resource: [`acs:oss:*:${accountId}:${resource}`]\n        }]\n    };\n\n    let body = {\n        RoleArn: `acs:ram::${accountId}:role/${bucket}-ossupload-role`,\n        RoleSessionName: bucket,\n        DurationSeconds: 1000,\n        Action: 'AssumeRole',\n        Policy: JSON.stringify(policy)\n    };\n\n    var date = Aliyun.util.date.getDate();\n\n    body.Format = \"JSON\";\n    body.Version = \"2015-04-01\";\n    body.AccessKeyId = accessKeyId;\n    body.SignatureVersion = \"1.0\";\n    body.SignatureMethod = \"HMAC-SHA1\";\n    body.SignatureNonce = String(date.getTime()) + randomNumbers(4);\n    body.Timestamp = Aliyun.util.date.iso8601(date);\n\n    // sign\n    var headers = [];\n\n    Aliyun.util.each(body, function (name) {\n        headers.push(name);\n    });\n\n    headers.sort(function (a, b) {\n        return a < b ? -1 : 1;\n    });\n\n    var canonicalizedQueryString = \"\";\n    Aliyun.util.arrayEach.call(this, headers, function (name) {\n        canonicalizedQueryString += \"&\" + name + \"=\" + Aliyun.util.popEscape(body[name]);\n    });\n\n    var stringToSign = 'POST&%2F&' + Aliyun.util.popEscape(canonicalizedQueryString.substr(1));\n    body.Signature = Aliyun.util.crypto.hmac(`${secretAccessKey}&`, stringToSign, 'base64', 'sha1');\n    return body;\n};\n\nconst randomNumbers = count => {\n    var num = '';\n    for (var i = 0; i < count; i++) {\n        num += Math.floor(Math.random() * 10);\n    }\n    return num;\n};\n\nconst ossStsToken = (() => {\n    var _ref = _asyncToGenerator(function* (ctx, next) {\n\n        const stsParams = getAliyunSignature({\n            accessKeyId,\n            secretAccessKey\n        });\n\n        // 此处没有使用superagent,原因是改成superagent后报bad request,猜测是params参数格式没有传递正确，留待解决\n        let res = yield urllib.request('https://sts.aliyuncs.com', {\n            method: 'POST',\n            data: stsParams,\n            dataType: 'json'\n        });\n\n        if (res && res.status === 200) {\n            ctx.body = getResponse(true, res.data || {});\n        } else {\n            ctx.body = getResponse(false, '');\n        }\n    });\n\n    return function ossStsToken(_x, _x2) {\n        return _ref.apply(this, arguments);\n    };\n})();\n\nconst uploadToOSS = (() => {\n    var _ref2 = _asyncToGenerator(function* (buffer, key) {\n        const oss = new Aliyun.OSS({\n            accessKeyId,\n            secretAccessKey,\n            endpoint: 'http://oss-cn-hangzhou.aliyuncs.com',\n            // 这是 oss sdk 目前支持最新的 api 版本, 不需要修改\n            apiVersion: '2013-10-15'\n        });\n\n        return new Promise((() => {\n            var _ref3 = _asyncToGenerator(function* (resolve) {\n                yield oss.putObject({\n                    Bucket: bucket,\n                    Key: key, // 注意, Key 的值不能以 / 开头, 否则会返回错误.\n                    Body: buffer,\n                    AccessControlAllowOrigin: '',\n                    ContentType: 'image/png',\n                    CacheControl: 'public', // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9\n                    ContentDisposition: '', // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1\n                    ContentEncoding: 'utf-8', // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11\n                    ServerSideEncryption: 'AES256',\n                    Expires: null // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21\n                }, function (err, data) {\n                    if (err) {\n                        console.log('error:', err);\n                        return;\n                    }\n                    resolve();\n                });\n            });\n\n            return function (_x5) {\n                return _ref3.apply(this, arguments);\n            };\n        })());\n    });\n\n    return function uploadToOSS(_x3, _x4) {\n        return _ref2.apply(this, arguments);\n    };\n})();\n\nmodule.exports = {\n    ossStsToken,\n    getAliyunSignature,\n    uploadToOSS\n};\n\n//# sourceURL=webpack:///./src/controllers/aliyun.js?");

/***/ }),

/***/ "./src/controllers/upload.js":
/*!***********************************!*\
  !*** ./src/controllers/upload.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nconst aliyun = __webpack_require__(/*! ./aliyun */ \"./src/controllers/aliyun.js\");\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst uuidv1 = __webpack_require__(/*! uuid/v1 */ \"../../../node_modules/uuid/v1.js\");\nconst { getResponse } = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\nconst create = (() => {\n    var _ref = _asyncToGenerator(function* (ctx) {\n        yield _operate(ctx.request.files[0]).then((() => {\n            var _ref2 = _asyncToGenerator(function* (src) {\n                ctx.body = getResponse(true, {\n                    src\n                });\n            });\n\n            return function (_x2) {\n                return _ref2.apply(this, arguments);\n            };\n        })());\n    });\n\n    return function create(_x) {\n        return _ref.apply(this, arguments);\n    };\n})();\n\nconst _operate = (() => {\n    var _ref3 = _asyncToGenerator(function* (fileReadStream) {\n        const { path, filename } = fileReadStream;\n        const src = `xxx`;\n        const link = `//xxx/${src}`;\n\n        return new Promise((() => {\n            var _ref4 = _asyncToGenerator(function* (resolve, reject) {\n                // await fs.readFile(path,async(err,data)=>{\n                //     await aliyun.uploadToOSS(data,src).then(()=>{\n                //         resolve(`/homework/upload/${filename}`)\n                //         fs.unlink(path, function(err){\n                //             if(err){\n                //                 throw err;\n                //             }\n                //         })\n                //     },reject)\n                // })\n\n                const content = fs.readFileSync(path);\n\n                yield aliyun.uploadToOSS(content, src).then(function () {\n                    resolve(`/homework/upload/${filename}`);\n                    fs.unlink(path, function (err) {\n                        if (err) {\n                            throw err;\n                        }\n                    });\n                }, reject);\n            });\n\n            return function (_x4, _x5) {\n                return _ref4.apply(this, arguments);\n            };\n        })());\n    });\n\n    return function _operate(_x3) {\n        return _ref3.apply(this, arguments);\n    };\n})();\n\nmodule.exports = {\n    create\n};\n\n//# sourceURL=webpack:///./src/controllers/upload.js?");

/***/ }),

/***/ "./src/controllers/view.js":
/*!*********************************!*\
  !*** ./src/controllers/view.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nconst config = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n\nconst Index = (() => {\n    var _ref = _asyncToGenerator(function* (ctx) {\n        yield ctx.render('index', {\n            cdnHostName: config.cdnHostName,\n            jsVersion: config.jsVersion\n        });\n    });\n\n    return function Index(_x) {\n        return _ref.apply(this, arguments);\n    };\n})();\n\nmodule.exports = {\n    Index\n};\n\n//# sourceURL=webpack:///./src/controllers/view.js?");

/***/ }),

/***/ "./src/helpers/errors.js":
/*!*******************************!*\
  !*** ./src/helpers/errors.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n* 错误列表\n*/\n\nmodule.exports = {\n  e001: '请求参数缺失',\n  e002: '服务器出错喽，请稍后重试',\n  e003: '请求参数错误'\n};\n\n//# sourceURL=webpack:///./src/helpers/errors.js?");

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nconst errors = __webpack_require__(/*! ./errors */ \"./src/helpers/errors.js\");\nconst schedule = __webpack_require__(/*! node-schedule */ \"node-schedule\");\nconst moment = __webpack_require__(/*! moment */ \"moment\");\n\nexports.getUuid = function () {\n    function s4() {\n        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);\n    }\n\n    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4();\n};\n\nexports.getResponse = function (success, e) {\n    if (success) {\n        return {\n            data: e || {},\n            success: true\n        };\n    } else {\n        return {\n            success: false,\n            error: e || '',\n            errorMsg: errors[e] || '未知错误！'\n        };\n    }\n};\n\n// 定时任务 每天把日志文件分类归集\nexports.LogFileArrange = _asyncToGenerator(function* () {\n    schedule.scheduleJob({\n        hour: 0,\n        minute: 3\n    }, function () {\n        const dir = moment().format('YYYY-MM-DD-HH-mm');\n        console.log('日志更新了');\n        fs.mkdir(`./logs/${dir}`, function () {\n            ['out', 'access', 'error'].map(function (itm) {\n                const readerStream = fs.createReadStream(`./logs/${itm}.log`);\n                let data = '';\n                readerStream.setEncoding('UTF8');\n                readerStream.on('data', function (chunk) {\n                    return data += chunk;\n                });\n                readerStream.on('end', function () {\n                    let writerStream = fs.createWriteStream(`./logs/${dir}/${itm}.log`);\n                    writerStream.write(data, 'UTF8');\n                    writerStream.end();\n                    writerStream.on('finish', function () {\n                        writerStream = fs.createWriteStream(`./logs/${itm}.log`);\n                        writerStream.write('');\n                        writerStream.end();\n                    });\n                });\n            });\n        });\n    });\n});\n\n// 校验手机号码格式是否正确\nexports.checkPhone = function (phone) {\n    if (!phone) return false;\n    const reg = new RegExp(/^(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);\n    if (!reg.test(+phone)) {\n        return false;\n    } else {\n        return true;\n    }\n};\n\n// 获取ip地址\nexports.getAcessRealIP = req => {\n    return req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;\n};\n\nexports.SessStoreUser = (() => {\n    var _ref2 = _asyncToGenerator(function* (ctx, next) {\n        const env = \"test\" || 'development';\n        let isLogin = false;\n\n        if (env === 'development') {\n            var { sign_id = '5b28d14eb04394d85288a498' } = ctx.session;\n        } else {\n            var { sign_id = '' } = ctx.session;\n        }\n\n        if (sign_id) {\n            sign = yield models_homework.sign.findById(sign_id);\n            isLogin = true;\n        }\n\n        ctx.state = {\n            sign,\n            isLogin\n        };\n\n        yield next();\n    });\n\n    return function (_x, _x2) {\n        return _ref2.apply(this, arguments);\n    };\n})();\n\n//# sourceURL=webpack:///./src/helpers/index.js?");

/***/ }),

/***/ "./src/helpers/log.js":
/*!****************************!*\
  !*** ./src/helpers/log.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nconst moment = __webpack_require__(/*! moment */ \"moment\");\n\nconst _getAcessRealIP = req => {\n    return req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;\n};\n\nconst _log = (() => {\n    var _ref = _asyncToGenerator(function* (url, path, params, opt, ip) {\n        let r = {\n            url,\n            path,\n            params,\n            opt,\n            ip,\n            org_id\n        };\n        yield models.log.create(r);\n    });\n\n    return function _log(_x, _x2, _x3, _x4, _x5) {\n        return _ref.apply(this, arguments);\n    };\n})();\n\nconst Record = (() => {\n    var _ref2 = _asyncToGenerator(function* (ctx, next) {\n        let opt = 'access';\n        let {\n            url = ''\n        } = ctx.request;\n        let path = url.split('?')[0] || '';\n        let params = ctx.request.query || ctx.request.body || {};\n        let ip = _getAcessRealIP(ctx.req);\n        yield _log(url, path, params, opt, ip);\n        yield next();\n    });\n\n    return function Record(_x6, _x7) {\n        return _ref2.apply(this, arguments);\n    };\n})();\n\nmodule.exports = {\n    Record\n};\n\n//# sourceURL=webpack:///./src/helpers/log.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Koa = __webpack_require__(/*! koa */ \"koa\");\nconst bodyParser = __webpack_require__(/*! koa-bodyparser */ \"koa-bodyparser\");\nconst logger = __webpack_require__(/*! koa-logger */ \"koa-logger\");\nconst views = __webpack_require__(/*! koa-views */ \"koa-views\");\nconst session = __webpack_require__(/*! koa-session */ \"koa-session\");\nconst MongoStore = __webpack_require__(/*! koa-session-mongo2 */ \"koa-session-mongo2\");\nconst cors = __webpack_require__(/*! koa2-cors */ \"koa2-cors\");\n\nconst router = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\nconst config = __webpack_require__(/*! ../config */ \"./config/index.js\");\nconst app = new Koa();\n\n// 服务器log文件\napp.use(logger());\n\napp.use(cors());\n\napp.use(bodyParser({}));\n\napp.use(views( true ? '' : undefined, {\n    map: {\n        html: 'lodash'\n    }\n}));\n\napp.use(session({\n    key: 'koa_sess',\n    store: new MongoStore(config.sessionURL),\n    signed: false,\n    // cookie过期时间，由浏览器负责到时清除，单位毫秒\n    maxAge: 24 * 60 * 60 * 1000\n}, app));\n\nconst {\n    SessStoreUser,\n    LogFileArrange\n} = __webpack_require__(/*! ./helpers */ \"./src/helpers/index.js\");\n// 关联使用session储存登录的账号信息\napp.use(SessStoreUser);\nLogFileArrange();\n\n// 系统级别的log记录，不是服务器的记录，记在log表中\nconst { Record } = __webpack_require__(/*! ./helpers/log */ \"./src/helpers/log.js\");\napp.use(Record);\n\n// 使用router\napp.use(router.routes(), router.allowedMethods());\n\nglobal.models = __webpack_require__(/*! ./models */ \"./src/models/index.js\");\n\napp.listen(config.port);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst { mongoUri, mongoUriParam } = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n\nmongoose.Promise = global.Promise;\n\nconst conn = mongoose.createConnection(`${mongoUri}/koa?${mongoUriParam}`);\n\nconst db = {};\n\nconst log = __webpack_require__(/*! ./log */ \"./src/models/log.js\");\n\nconst models = [log];\n\nfor (model of models) {\n    const newSchema = new mongoose.Schema(typeof model.schema === 'function' && model.schema(mongoose.Schema) || model.schema, { collection: model.name });\n    db[model.name] = conn.model(model.name, newSchema);\n}\n\nmodule.exports = db;\n\n//# sourceURL=webpack:///./src/models/index.js?");

/***/ }),

/***/ "./src/models/log.js":
/*!***************************!*\
  !*** ./src/models/log.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const model = {\n    name: 'log', // 指定数据库中的collection\n    schema: {\n        sign_id: String,\n        user_id: String,\n        org_id: String,\n        url: String, //请求的url，带参数\n        path: String, //请求路径\n        ip: String, //请求ip\n        params: {},\n        opt: String, //操作码\n        create_time: {\n            default: Date.now,\n            type: Number\n        },\n        hour: Number //访问的小时数，便于数据统计每个时段的访问人数。0-23，0代表00:00:00~00:59:59\n    }\n};\n\nmodule.exports = model;\n\n//# sourceURL=webpack:///./src/models/log.js?");

/***/ }),

/***/ "./src/routes/aliyun.js":
/*!******************************!*\
  !*** ./src/routes/aliyun.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\nconst Aliyun = __webpack_require__(/*! ../controllers/aliyun */ \"./src/controllers/aliyun.js\");\n\nconst router = Router({\n\tprefix: '/api/aliyun'\n});\n/**\n\t@desc 获取阿里云oss stsToken\n\t@get /api/aliyun/oss_sts_token\n**/\nrouter.get('/oss_sts_token', Aliyun.ossStsToken);\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/aliyun.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst view = __webpack_require__(/*! ./view */ \"./src/routes/view.js\");\nconst aliyun = __webpack_require__(/*! ./aliyun */ \"./src/routes/aliyun.js\");\nconst upload = __webpack_require__(/*! ./upload */ \"./src/routes/upload.js\");\n\nconst router = Router({\n\t// prefix:''\n});\n\nconst routes = [view, upload];\n\nfor (route of routes) {\n\trouter.use(route.routes(), route.allowedMethods());\n}\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/routes/upload.js":
/*!******************************!*\
  !*** ./src/routes/upload.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\nconst Upload = __webpack_require__(/*! ../controllers/upload */ \"./src/controllers/upload.js\");\n\nconst busboy = __webpack_require__(/*! koa-busboy */ \"koa-busboy\");\nconst uploader = busboy({\n  dest: 'upload', // default is system temp folder (`os.tmpdir()`)\n  fnDestFilename: (fieldname, filename) => Date.now().toString(16) + filename\n});\n\nconst router = Router({\n  prefix: '/api/uploadfile'\n});\n\n/**\n * @post '/api/uploadfile'\n */\nrouter.post('/', uploader, Upload.create);\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/upload.js?");

/***/ }),

/***/ "./src/routes/view.js":
/*!****************************!*\
  !*** ./src/routes/view.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\nconst View = __webpack_require__(/*! ../controllers/view */ \"./src/controllers/view.js\");\n\nconst router = Router();\n\nrouter.get(\"/\", View.Index);\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/view.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ }),

/***/ "aliyun-sdk":
/*!*****************************!*\
  !*** external "aliyun-sdk" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aliyun-sdk\");\n\n//# sourceURL=webpack:///external_%22aliyun-sdk%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");\n\n//# sourceURL=webpack:///external_%22koa%22?");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-bodyparser\");\n\n//# sourceURL=webpack:///external_%22koa-bodyparser%22?");

/***/ }),

/***/ "koa-busboy":
/*!*****************************!*\
  !*** external "koa-busboy" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-busboy\");\n\n//# sourceURL=webpack:///external_%22koa-busboy%22?");

/***/ }),

/***/ "koa-logger":
/*!*****************************!*\
  !*** external "koa-logger" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-logger\");\n\n//# sourceURL=webpack:///external_%22koa-logger%22?");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");\n\n//# sourceURL=webpack:///external_%22koa-router%22?");

/***/ }),

/***/ "koa-session":
/*!******************************!*\
  !*** external "koa-session" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-session\");\n\n//# sourceURL=webpack:///external_%22koa-session%22?");

/***/ }),

/***/ "koa-session-mongo2":
/*!*************************************!*\
  !*** external "koa-session-mongo2" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-session-mongo2\");\n\n//# sourceURL=webpack:///external_%22koa-session-mongo2%22?");

/***/ }),

/***/ "koa-views":
/*!****************************!*\
  !*** external "koa-views" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-views\");\n\n//# sourceURL=webpack:///external_%22koa-views%22?");

/***/ }),

/***/ "koa2-cors":
/*!****************************!*\
  !*** external "koa2-cors" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa2-cors\");\n\n//# sourceURL=webpack:///external_%22koa2-cors%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "node-schedule":
/*!********************************!*\
  !*** external "node-schedule" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-schedule\");\n\n//# sourceURL=webpack:///external_%22node-schedule%22?");

/***/ }),

/***/ "urllib":
/*!*************************!*\
  !*** external "urllib" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"urllib\");\n\n//# sourceURL=webpack:///external_%22urllib%22?");

/***/ })

/******/ });