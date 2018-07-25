const moment = require('moment')

const _getAcessRealIP = (req) => {
    return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress
}

const _log = async(url, path, params, opt, ip) => {
    let r = {
        url,
        path,
        params,
        opt,
        ip,
    }
    await models.log.create(r)
}

const Record = async(ctx, next) => {
    let opt = 'access'
    let {
        url = ''
    } = ctx.request
    let path = url.split('?')[0] || ''
    let params = ctx.request.query || ctx.request.body || {}
    let ip = _getAcessRealIP(ctx.req)
    await _log(url, path, params, opt, ip)
    await next()
}

module.exports = {
    Record,
}
