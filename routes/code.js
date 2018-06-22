const Router = require("koa-router")
const Code = require('../controllers/code')
const Validate = require('../middleware/validate')

const router = Router({
	prefix: "/api/code"
});

router.get('/genImageCode', Code.genImageCode)

router.post('/getMobileCode', Validate.validCaptcha, Code.getMobileCode)

module.exports = router