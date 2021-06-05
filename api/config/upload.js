import multer from 'multer'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        // console.log(req.body.name)
        cb(null, file.originalname)
    }
})

const upload = multer({storage}) 

export const fileUpload = (app) => {
    app.post('/api/upload', upload.single('file'), (req, res) => {
        // console.log(req.body.name)
        try {
            return res.status(200).json({ message: 'Upload complete.'})
        } catch (error) {
            console.log(error)
        }
    })
}