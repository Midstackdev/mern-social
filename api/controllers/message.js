import Message from '../models/message.js'

export const me = (req, res) => {
    res.status(200).json({ name: 'Alred Smith', email: 'alfy@admin.com'})
}

export const create = async (req, res) => {
    const newMessage = new Message(req.body)

    try {
        const savedMessage = await newMessage.save()
        return res.status(200).json(savedMessage)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const show = async (req, res) => {
    try {
        const messages = await Message.find({ conversationId: req.params.id })
        
        return res.status(200).json(messages)
    } catch (error) {
        return res.status(500).json(error)
    }
}

