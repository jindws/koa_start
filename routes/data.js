/**
 * 数据报表
 */

const Router = require("koa-router")
const {
    task,
    commit,
    comment
} = require('../controllers/data')

const router = Router({
    prefix: '/api/data'
})

/**
 * @desc 该机构创建作业的数据统计
 * @param {
 *      start:String, //必填,开始日期时间戳
 *      end:String, //必填,结束日期时间戳
 * 
 *      is_static:Boolean //选填，是否查询info，默认不查询
 * }
 * @returns 
 * false|请求参数缺失 无start或end
 * {
 *      task:[{
 *          _id:String, //id
 *          createTimestamp:Number, //创建时间戳
 *          createZY:Number //创建作业数
 *      }],
 *      info:{
 *          createTimestamp:Number, //创建时间戳
 *          totalGroups:Number, //总班级数
 *          totalStudents:Number //总学生数
 *      }
 * }
 */
router.post('/task', task)

/**
 * @desc 该机构提交作业的数据统计
 * @param {
 *      start:String, //必填
 *      end:String, //必填
 * 
 *      is_static:Boolean //选填，是否查询info，默认不查询
 * }
 * @returns 
 * false|请求参数缺失 无start或end
 * {
 *      commit:[{
 *          _id:String, //id
 *          createTimestamp:Number, //创建时间戳
 *          commitZY:Number //提交作业数
 *      }],
 *      info:{
 *          createTimestamp:Number, //创建时间戳
 *          totalGroups:Number, //总班级数
 *          totalStudents:Number //总学生数
 *      }
 * }
 */
router.post('/commit', commit)

/**
 * @desc 该机构评价作业的数据统计
 * @param {
 *      start:String, //必填
 *      end:String, //必填
 * 
 *      is_static:Boolean //选填，是否查询info，默认不查询
 * }
 * @returns 
 * false|请求参数缺失 无start或end
 * {
 *      comment:[{
 *          _id:String, //id
 *          createTimestamp:Number, //创建时间戳
 *          commentZY:Number //评价作业数
 *      }],
 *      info:{
 *          createTimestamp:Number, //创建时间戳
 *          totalGroups:Number, //总班级数
 *          totalStudents:Number //总学生数
 *      }
 * }
 */
router.post('/comment', comment)

module.exports = router