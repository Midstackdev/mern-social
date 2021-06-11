import Conversation from '../models/conversation.js'

export const me = (req, res) => {
    res.status(200).json({ name: 'Alred Smith', email: 'alfy@admin.com'})
}

export const create = async (req, res) => {
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId]
    })
    
    try {
        const savedConversation = await newConversation.save()
        return res.status(200).json(savedConversation)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const index = async (req, res) => {
    try {
        const conversations = await Conversation.find({
            members: { $in: [req.params.id] }
        })
        return res.status(200).json(conversations)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const show = async (req, res) => {
    try {
        const conversation = await Conversation.findOne({
            members: { $all: [req.params.fuid, req.params.suid] }
        })
        return res.status(200).json(conversation)
    } catch (error) {
        return res.status(500).json(error)
    }
}
