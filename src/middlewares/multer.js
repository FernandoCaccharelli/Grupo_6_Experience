const multer = require('multer')
const path = require('path')

const folderPath = path.resolve(__dirname,'../../public/images') //Carpeta de imagenes de productos

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, folderPath)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
  })
  

const upload = multer({ storage: storage })

module.exports = upload