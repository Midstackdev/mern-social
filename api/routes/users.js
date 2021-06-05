import express from 'express'
import * as controller from '../controllers/user.js'

const router = express.Router()

router.get('/me', controller.me)
router.put('/:id', controller.updateUser)
router.delete('/:id', controller.deleteUser)
router.get('/', controller.getUser)
router.get('/friends/:id', controller.getFriends)
router.put('/:id/follow', controller.follow)
router.put('/:id/unfollow', controller.unfollow)

export default router