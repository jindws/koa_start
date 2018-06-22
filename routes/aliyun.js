/**
 * Created by @liwenqiang on 2017/6/1.
 */
const Router = require('koa-router')
const Aliyun = require('../controllers/aliyun')
//const Auth = require("../middleware/auth")

const router = Router({
    prefix: '/api/aliyun'
})
/**
	@desc 获取阿里云oss stsToken
	@get /api/aliyun/oss_sts_token
**/
router.get('/oss_sts_token',Aliyun.ossStsToken)


module.exports = router
