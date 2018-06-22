const Router = require("koa-router");

const view = require("./view");
const aliyun = require("./aliyun");
const upload = require("./upload")

const router = Router({
	// prefix:''
});

const routes = [
	view,
	upload,
];

for (route of routes) {
	router.use(route.routes(), route.allowedMethods());
}

module.exports = router;
