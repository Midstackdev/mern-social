import express from 'express'

const router = express.Router()

router.get('/me', (req, res) => {
    res.status(200).json({ name: 'Alred Smith', email: 'alf@admin.com'})
})

export default router