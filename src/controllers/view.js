const config = require('../../config')

const Index = async (ctx) =>{
    await ctx.render('index',{
        cdnHostName:config.cdnHostName,
        jsVersion:config.jsVersion,
    })
}


module.exports = {
    Index,
}
