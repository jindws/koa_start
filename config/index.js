// 本地开发
var development = require('./development');
// 测试环境
var test = require('./test');
// 正式环境
var production = require('./production');

var env = process.env.NODE_ENV || 'development';

console.log(env)
var configs = {
    test,
    development,
    production
};

var defaultConfig = {
    env
}

const config = Object.assign({}, defaultConfig, configs[env])

module.exports = config;
