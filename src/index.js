const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const views = require('koa-views')
const session = require("koa-session")
const MongoStore = require("koa-session-mongo2")
const cors = require('koa2-cors')

const router = require('./routes')
const config = require('../config')
const app = new Koa()

// 服务器log文件
app.use(logger())

app.use(cors());

app.use(bodyParser({}))

app.use(views(process.env.NODE_ENV!=='development'?'':__dirname + '/view' , {
  map: {
      html: 'lodash'
  }
}));

app.use(session({
    key: 'koa_sess',
    store: new MongoStore(config.sessionURL),
    signed:false,
    // cookie过期时间，由浏览器负责到时清除，单位毫秒
    maxAge: 24 * 60 * 60 * 1000
},app))

const {
    SessStoreUser,
    LogFileArrange,
} = require('./helpers')
// 关联使用session储存登录的账号信息
app.use(SessStoreUser)
LogFileArrange()

// 系统级别的log记录，不是服务器的记录，记在log表中
const {Record} = require('./helpers/log')
app.use(Record)

// 使用router
app.use(router.routes(),router.allowedMethods())

global.models = require('./models')

app.listen(config.port)
