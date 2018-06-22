const Router = require("koa-router");
const View = require("../controllers/view");

const router = Router();

router.get("/", View.Index);

module.exports = router;
