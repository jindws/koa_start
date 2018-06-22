### koa项目初始化

> 功能
- 链接mongoose数据库
- 配置aliyun文件上传[传服务器或直传aliyun]
- webpack打包文件
- log配置 每日自动切割日志文件;存储数据库的日志

> 初始化

- 配置`mongo`,在`./config`下配置,配置`mongoUri`,微软云还要配置`mongoUriParam`
- 如要使用`aliyun`服务,需要配置`aliyun`的`accessKeyId`等
- `yarn start` 本地运行
- `yarn build:dev` 打包,拷贝服务器运行 `yarn for`


```
文件上传时,传服务器提示文件太大,需要去配置nginx

http{
    client_max_body_size 1000M;
    client_body_buffer_size 128k;
}
```
