import express from 'express'
import * as controller from '../controllers/message.js'

const router = express.Router()

router.get('/me', controller.me)
router.post('/', controller.create)
router.get('/:id', controller.show)


export default router