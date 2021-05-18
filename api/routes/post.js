import express from 'express'
import * as controller from '../controllers/post.js'

const router = express.Router()

router.get('/', controller.index)
router.post('/', controller.create)
router.get('/timeline/:id', controller.postFromFollowing)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)
router.put('/:id/like', controller.like)
router.get('/:id', controller.show)


export default router