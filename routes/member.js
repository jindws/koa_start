const Router = require("koa-router")
const Member = require("../controllers/member")
const User = require("../controllers/user")
const Code = require("../controllers/code")
const Wx = require("../middleware/wx")
const Auth = require("../middleware/auth")
const Validate = require("../middleware/validate")

const router = Router({
	prefix: "/api/member"
});

/**
 * @desc 使用手机号和验证码登录
 * @post(/api/member/login)
 * @params
 * 	phone: 用户手机号
 *  mobileCode: 手机验证码
 * 	wx: 微信授权信息
 */
router.post("/login", Wx.wxauth, Validate.validMobileCode, Member.phoneLogin);

/**
 * @desc 使用微信授权登录
 * @post(/api/member/wxLogin)
 * @params
 *  phone: 用户手机号
 *  wx: 微信授权信息
 */
router.post("/wxLogin", Wx.wxauth, Wx.wxinfo, Member.wxLogin)

/**
 * @desc 微信登录
 * @post (/api/member/ykLogin)
 */
router.post('/ykLogin', Wx.wxauth, Member.ykLogin)

/**
 * @desc 免登
 * @post (/api/member/freeLogin)
 */
router.post('/freeLogin', Wx.wxauth, Member.freeLogin)

/**
 * @desc 登出
 * @post(/api/member/logout)
 */
router.post("/logout", Member.logout)

/**
 * @desc 获取用户信息
 * @post(/api/user/getUserInfo)
 */
router.post("/getUserInfo", User.userinfo)

module.exports = router;
