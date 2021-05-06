import User from '../models/user.js'
import bcrypt from 'bcrypt'

export const me = (req, res) => {
    res.status(200).json({ name: 'Alred Smith', email: 'alfy@admin.com'})
}

export const register = async (req, res) => {
    
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        const user = await newUser.save()
        return res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}

export const login = async (req, res) => {
    
    try {
        const user = await User.findOne({ 'email': req.body.email })
        !user && res.status(404).json({ message: 'User not found' })

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(404).json({ message: 'Invalid password' })

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}