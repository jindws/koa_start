const Router = require("koa-router")
const User = require("../controllers/user")
const Member = require("../controllers/member")

const router = Router({
	prefix: "/api/user"
});

/**
 * @desc 创建老师
 * @post(/api/user/createTeacher)
 */
router.post("/createTeacher", User.createTeacher)

/**
 * @desc 邀请教师
 * @post(/api/user/inviteTeacher)
 */
router.post("/inviteTeacher", User.inviteTeacher)

/**
 * @desc 获取用户信息
 * @post(/api/user/userinfo)
 */
router.post("/userinfo", User.userinfo)

module.exports = router