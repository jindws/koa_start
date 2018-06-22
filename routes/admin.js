const Router = require("koa-router")
const Admin = require('../controllers/admin')
const Auth = require('../middleware/auth')

const router = Router({
	prefix: "/api/admin"
});

//router.post('/getUserInfo', Admin.getUserInfo)

router.post('/changeIdentity', Admin.changeIdentity)

router.post('/getOrgList', Admin.getOrgList)

router.post('/changeOrg', Admin.changeOrg)

router.post('/EditName', Admin.EditName)

router.post('/EditStuInfo', Admin.EditStuInfo)

router.post('/orgTeacherList', Admin.orgTeacherList)

router.post('/orgTeacherDel', Admin.orgTeacherDel)

module.exports = router