const Router = require("koa-router")
const Org = require("../controllers/org")

const router = Router({
	prefix: "/api/org"
});

/**
 * @desc 机构开通
 * @post(/api/org/create)
 */
router.post("/create", Org.create);

/**
 * @desc 机构是否过期
 * @get /api/org/validate
 * @return {
 		validate_date:Numebr,
 		time:Numebr,
		type:Number,//1 专业版 2 标&免机构 3 个人机构
	}
 */
router.get("/validate", Org.validate);

/**
 * @desc 通过id获取name
 * @post /api/org/name
 * @param _id:String,//机构id
 * @return {
 		name:String,机构name
	}
 */
router.post("/name", Org.name);

module.exports = router
