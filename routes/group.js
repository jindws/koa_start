/**
 * group
 */
const Router = require('koa-router')
const Group = require('../controllers/group')
const Auth = require("../middleware/auth")

const router = Router({
    prefix: '/api/group'
})

/**
	@desc 创建班级/编辑班级
	@post /api/group/operate
    @param {
        name:String,//班级名称

        _id:String,//编辑时 必传
    }
    @return
    false|请求参数确失👉无title|无_id且无group_id
    false|抱歉,操作失败,该班级不存在👉新建时,group_id查不到未删除的group
    false|操作失败,课程失效或无操作权限👉编辑时,非创建者
    {
        _id:String,//新建或在编辑的班级的_id
    }
**/
router.post('/operate', Group.operate)

/**
	@desc 删除班级
	@post /api/group/delete
    @param {
        _id:String,//必传
    }
    @return
    false|xxx
    true
**/
router.post('/delete',Group.delete)

/**
	@desc 班级列表
	@post /api/group/list
    @param {
        pageSize:Number,//默认10
        pageNum:Number,//默认1
    }
    @return
    {
        count:Number,//总数
        list:[{
            headimgurls:[String],//头像,不超过4个
            _id:String,
            name:String,
            tasknum:Number,//作业数量
        }]
    }
**/
router.post('/list',Group.list)

/**
	@desc 根据id获取 班级 name
	@post /api/group/name
    @param _id:String,//必填
    @return
    {
        name:String,
    }
**/
router.post('/name',Auth.checkgroup,Group.name)

/**
	@desc 加入group 必须是绑定好学员的账号
	@post /api/group/join
    @param {
        group_id:String,
    }
    @return true|false
**/
// router.post('/join',Auth.checkgroup,Auth.couldjoin,Group.join)
router.post('/join',Auth.checkgroup,Group.join)

/**
	@desc 删除班级学员
	@post /api/group/remove
    @param {
        group_id:String,
        stu_id:String,//学生id
    }
    @return true|false
**/
router.post('/remove',Auth.checkgroup,Group.remove)


module.exports = router
