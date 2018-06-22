/**
 * 评论
 */
 const Router = require('koa-router')
 const Comment = require('../controllers/commit_task_comment')
 const Auth = require("../middleware/auth")
 const urllib = require('urllib')

 const router = Router({
     prefix: '/api/comment'
 })

 /**
 	@desc 提交新评价
 	@post /api/comment/create
     @param {
         commit_task_id:String,//提交的作业的id 必填
         content:String,//必填
         image_url: [],
         audio_url: [],
     }
     @return true|false

 **/
 router.post('/create',Auth.teacherUser,Comment.create)

 /**
 	@desc 查看评论详情
 	@post /api/comment/detail
     @param _id:String, //必填
     @return
     {
         create_user_headimage:String,//用户头像
         create_user_name: String,//用户名
         content:String,
         image_url: [],
         audio_url: [],
     }
 **/
 router.post('/detail',Comment.detail)

 /**
   @desc 查看评论列表
   @post /api/comment/list
     @param {
        _id:String, //提交的作业的id
        pageSize:Number,//默认10
        pageNum:Number,//默认1
    }
     @return
     {
         content:String,
         image_url: [],
         audio_url: [],
         create_user_headimage:String,//评价人头像
         create_user_name: String,//评价人name
         create_time:Number,
     }
 **/
 router.post('/list',Comment.list)

 /**
   @desc 删除评价
   @post /api/comment/delete
     @param {
         _id:String,//评价id
     }
     @return true|false
 **/
 router.post('/delete',Comment.delete)

 module.exports = router
