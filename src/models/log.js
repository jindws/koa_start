const model = {
    name: 'log', // 指定数据库中的collection
    schema: {
        sign_id:String,
        user_id: String,
        org_id:String,
        url: String, //请求的url，带参数
        path: String, //请求路径
        ip: String, //请求ip
        params: {},
        opt: String, //操作码
        create_time: {
            default:Date.now,
            type:Number,
        },
        hour: Number //访问的小时数，便于数据统计每个时段的访问人数。0-23，0代表00:00:00~00:59:59
    }
}

module.exports = model
