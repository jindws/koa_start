const Router = require("koa-router")
const Member = require("../controllers/member")
const Order = require("../controllers/order")
const Wx = require("../middleware/wx")

const router = Router({
	prefix: "/api/order"
});

/**
 * @desc 创建支付订单
 */
router.post('/create', Order.create)

/**
 * @desc 支付结果回调
 */
router.post('/payReturn', Wx.payreturn, Order.createAndUpdateOrg)

/**
 * @desc 支付结果查询
 */
router.get('/payResult', Order.payResult)

module.exports = router