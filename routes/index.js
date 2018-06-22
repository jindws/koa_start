const Router = require("koa-router");

const view = require("./view");
const member = require("./member");
// const aliyun = require("./aliyun");
const code = require("./code")

const task = require("./task")
const data = require("./data")
const group = require("./group")
const stu = require("./stu")
const commit_task = require("./commit_task")
const zan = require("./zan")
const commit_task_comment = require("./commit_task_comment")
const admin = require("./admin")
const org = require("./org")
const order = require("./order")
const user = require("./user")
const upload = require("./upload")

const router = Router({
	prefix:'/homework'
});

const routes = [
	view,
	member,
	upload,
	code,
	task,
	data,
	group,
	stu,
	commit_task,
	zan,
	commit_task_comment,
	admin,
	org,
	order,
	user
];

for (route of routes) {
	router.use(route.routes(), route.allowedMethods());
}

module.exports = router;
