import express from 'express'
import * as controller from '../controllers/auth.js'

const router = express.Router()

router.get('/me', controller.me)
router.post('/register', controller.register)
router.post('/login', controller.login)

export default router