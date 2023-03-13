import multer from 'multer'
import { v4 as uuid } from 'uuid'
import { STORAGE } from '../routers/prismaclient.routes'

const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, STORAGE)
    },
    filename(req, file, callback) {
        callback(null, uuid() + '.png')
    },
})

export const uploadFile = () => {
    return multer({ storage }).single('img')
}