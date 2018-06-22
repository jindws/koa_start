/**
 * 提交作业
 */
const Router = require('koa-router')
const Commit_task = require('../controllers/commit_task')
const Auth = require("../middleware/auth")
const urllib = require('urllib')

const router = Router({
    prefix: '/api/commit_task'
})

/**
	@desc 提交新作业
	@post /api/commit_task/create
    @param {
        task_id:String,//作业的id 必填

        content:String,
        image_url:[String],
        audio_url:[String],
        video_url:[String]
    }
    @return true|false

**/
// router.post('/create',Auth.parentUser,Auth.checkhadstuInfo,Auth.checkingroup,Commit_task.create)
router.post('/create',Auth.parentUser,Auth.checkingroup,Commit_task.create)

/**
	@desc 查看作业详情
	@post /api/commit_task/detail
    @param _id:String, //必填
    @return
    {
        content:String,
        image_url:[],
        audio_url:[],
        video_url:[],
        stu_name:String,//学生姓名
        reverse_relation:String,//关系
        create_user_headimage:String,//头像
        create_user_name:String,//创建者姓名
        create_time:Number,//创建时间
        is_zan:Boolean,
        self:Boolean,//自己
    }
**/
router.post('/detail',Commit_task.detail)

/**
	@desc 某作业的 提交列表
	@post /api/commit_task/mainlist
    @param {
    	task_id:String, //必填
    	pageSize:Number,//默认10
    	pageNum:Number,//默认1
    }
    @return
    {
        count:Number,//总数 没有不传
        list:[{
            create_time:Number,//发表时间
            create_user_name:String,//发布
            create_user_headimage:String,//头像
            content:String,//内容
            image_url:[],
            audio_url:[],
            video_url:1,
            comment_count:Number,//评价数
            zan_count:String,//赞数
            is_zan:Boolean,//我已经点赞了
            stu_id:String,//学生id
        }],

        is_commit:Boolean,//用户是否提交过 老师不传
    }
**/
router.post('/mainlist',Commit_task.mainlist)


/**
	@desc 某作业的 某学员的所有提交
	@post /api/commit_task/stuall
    @param {
        stu_id:Strng, //必填

        task_id:String,
    	pageSize:Number,//默认10
    	pageNum:Number,//默认1
    }
    @return
    {
        count:Number,//总数 没有不传
        list:[{
            create_user_name:String,//创建者name
            create_user_headimage:String,//创建者 头像
            stu_name:String,//学生name
            reverse_relation:String,//关系
            content:String,
            image_url:[],
            audio_url:[],
            video_url:[],
            comment_count:String,//评价数量
            zan_count:String,//赞数
            is_zan:String,//我点了赞吗
            can_delete:Boolean,//是否自己的可删除
        }],
    }
**/
router.post('/stuall',Commit_task.stuall)


/**
  @desc 删除提交的作业 对应评价/赞 删除
  @post /api/commit_task/delete
    @param {
        _id:String,//提交作业的id
    }
    @return true|false
**/
router.post('/delete',Commit_task.delete)

module.exports = router
