const Router = require('koa-router')
// const uuidv1 = require('uuid/v1')
const Upload = require('../controllers/upload')

const busboy = require('koa-busboy')
const uploader = busboy({
  dest: 'upload', // default is system temp folder (`os.tmpdir()`)
  // fnDestFilename: (fieldname, filename) => uuidv1() + filename
  fnDestFilename: (fieldname, filename) => Date.now().toString(16) + filename
})

const router = Router({
    prefix: '/api/uploadfile'
})

/**
 * @post '/api/uploadfile'
 */
router.post('/',uploader, Upload.create)


module.exports = router
