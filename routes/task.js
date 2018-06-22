/**
 * 布置作业相关
 */
const Router = require('koa-router')
const Task = require('../controllers/task')
const Auth = require("../middleware/auth")

const router = Router({
    prefix: '/api/task'
})
/**
	@desc 布置新作业
	@post /api/task/operate
    @param {
        title:String,//题目👉必填
        group_id:String,小组的id,//必填
        is_draft:Boolean,//草稿👉默认false
        content:String,//内容
        image_url:[],
        audio_url:[],
        video_url:[],
    }
    @return
    false|请求参数确失👉无title|无_id且无group_id
    false|抱歉,操作失败,该班级不存在👉新建时,group_id查不到未删除的group
    false|操作失败,课程失效或无操作权限👉编辑时,非创建者
    true
**/
router.post('/operate',Auth.checkgroup,Auth.checkteacher,Task.operate)

/**
	@desc 作业详情
	@post /api/task/detail
    @param _id:String //必填
    @return
    false|请求参数确失👉无_id
    false|抱歉,该作业不存在或已被删除
    {
        group_id:String,
        group_name:Sting,
        title:String,
        content:String,
        image_url:[],
        audio_url:[],
        video_url:[],
        pulish_time:String,//发布时间
        create_user_name:String,//老师的name
        headimgurl:String,//老师的头像
    }
**/
router.post('/detail',Task.detail)


/**
	@desc 删除作业
	@post /api/task/delete
    @param _id:String //必填
    @return
    false|请求参数确失👉无_id
    false|操作失败,课程失效或无操作权限👉非创建者
    true
**/
router.post('/delete',Task._delete)

/**
	@desc 某群 作业列表
	@post /api/task/list
    @param {
        group_id:String //必填
        pageSize:Number,
        pageNum:Number,
    }
    @return
    false|请求参数确失👉无group_id
    {
        group_name:String,
        count:Number,//总数
        list:[{
            _id:String,//作业id
            title:String,//作业题目
            pulish_time:String,//发布时间
            submitnum:Number,//提交人数

            submit:Boolean,//是否提交 登录用户为家长才有
        }]
    }
**/
router.post('/list',Auth.checkgroup,Task.list)


module.exports = router
