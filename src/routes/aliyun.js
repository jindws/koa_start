const Router = require('koa-router')
const Aliyun = require('../controllers/aliyun')

const router = Router({
    prefix: '/api/aliyun'
})
/**
	@desc 获取阿里云oss stsToken
	@get /api/aliyun/oss_sts_token
**/
router.get('/oss_sts_token',Aliyun.ossStsToken)


module.exports = router
