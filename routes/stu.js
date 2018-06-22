/**
 * 学员
 */
const Router = require('koa-router')
const Stu = require('../controllers/stu')
const Auth = require('../middleware/auth')
const urllib = require('urllib')

const router = Router({
    prefix: '/api/stu'
})

/**
	@desc 学员列表
	@post /api/stu/list
    @param {
        group_id:String,//必填
        pageSize:Number,
        pageNum:Number,
    }
    @return
    {
        count:Number,//总数
        list:[{
            name:String,
            phone:Number,//本人 电话
            users:[{
                reverse_relation:String,
                phone:Number,
            }]
        }]
    }
**/
router.post('/list',Auth.checkgroup,Stu.list)

/**
	@desc 加入group前,校验是否有同名学生,返回列表
	@post /api/stu/addedlist
    @param {
        name:String,//名字 必填
        group_id:String,/必填
    }
    @return
    {
        list:[{
            _id:String,
            phone:String,
            name:String,
        }]
    }
**/
router.post('/addedlist',Auth.checkgroup,Stu.addedlist)

/**
	@desc 选择addedlist的列表加入 只有没有绑定过学员的才能请求
	@post /api/stu/addjoin
    @param {
        👇全必填
        group_id:String,//班级id
        _id:String,//addedlist选择的项目的id
        reverse_relation:String,//关系 dad/mom etc.
    }
    @return true
**/
router.post('/addjoin',Auth.checkgroup,Auth.couldjoin,Stu.addjoin)

/**
	@desc 添加全新的学员  只有没有绑定过学员的才能请求
	@post /api/stu/addcreate
    @param {
        👇全必填
        group_id:String,//班级ids
        reverse_relation:String,//关系
        name:String,
    }
    @return true
**/
router.post('/addcreate',Auth.checkgroup,Auth.couldjoin,Stu.addcreate)

/**
	@desc 是否已经绑定了学员
	@post /api/stu/havestuinfo
    @return {
        have:Boolean,//绑定了
    }
**/
router.post('/havestuinfo',Stu.havestuinfo)

module.exports = router
