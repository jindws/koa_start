/**
 * 提交作业
 */
const Router = require('koa-router')
const Zan = require('../controllers/zan')
const Auth = require("../middleware/auth")

const router = Router({
    prefix: '/api/zan'
})

/**
	@desc 点赞/消赞
	@post /api/zan/operate
    @param {
        commit_task_id:String,//必填
        is_zan:Boolean,//默认true
    }
    @return true|false
**/
router.post('/operate',Zan.operate)

/**
	@desc 群点赞列表 无分页
	@post /api/zan/grouplist
    @param {
        group_id:String,//必填
    }
    @return {
        list:[{
            sort:Number,//排行
            sum:Number,//点赞数
            name:String,//学生姓名
        }],
        me:{//我有排名才会返回
            sort:Number,//排行
            sum:Number,//点赞数
            name:String,//学生姓名
        }
    }
**/
router.post('/grouplist',Auth.checkgroup,Zan.grouplist)

/**
	@desc 某作业点赞列表
	@post /api/zan/list
    @param {
        _id:String,//提交的作业的id 必填

        pageNum:Number,//默认1
        pageSize:Number,//默认10
    }
    @return {
        list:[{
            headimgurl:String,//点赞人 头像
            nick_name:String,//点赞人 name
        }],
        count:Number,//总数
    }
**/
router.post('/list',Zan.list)

module.exports = router
