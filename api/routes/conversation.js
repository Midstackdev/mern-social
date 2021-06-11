import express from 'express'
import * as controller from '../controllers/conversation.js'

const router = express.Router()

router.post('/', controller.create)
router.get('/me', controller.me)
router.get('/:id', controller.index)
router.get('/:fuid/:suid', controller.show)


export default router