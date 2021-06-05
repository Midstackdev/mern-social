import User from '../models/user.js'
import bcrypt from 'bcrypt'

export const me = (req, res) => {
    res.status(200).json({ name: 'Alred Smith', email: 'alfy@admin.com'})
}

export const updateUser = async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin) {
        if(req.body.password) {

           try {
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)
           } catch (error) {
               return res.status(500).json(error)
            } 
        }
        
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            })
            return res.status(200).json({ message: 'Account updated successfully'})
        } catch (error) {
            return res.status(500).json(error)  
        }
    }else {
        return res.status(403).json({ message: 'Unauthorized action'})
    }
}

export const deleteUser = async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin) {
        
        try {
            await User.deleteOne({ _id: req.params.id})
            return res.status(200).json({ message: 'Account deleted successfully'})
        } catch (error) {
            return res.status(500).json(error)  
        }
    }else {
        return res.status(403).json({ message: 'Unauthorized action'})
    }
}

export const getUser = async (req, res) => {
    const userId = req.query.userId
    const username = req.query.username
    
    try {
        const user = userId ? await User.findOne({ _id: userId }) : await User.findOne({ username: username})
        const { password, updatedAt, ...rest } = user._doc
        return res.status(200).json(rest)
    } catch (error) {
        return res.status(500).json(error)  
    }
    
}

export const getFriends = async (req, res) => {
    
    try {
        const user = await User.findOne({ _id: req.params.id })
        const friends = await Promise.all(
            user.followings.map((friendId) => {
                return User.findById(friendId)
            })
        )
        let firndList = []
        friends.map((friend) => {
            const { _id, username, profilePicture } = friend
            firndList.push({ _id, username, profilePicture })
        })
        return res.status(200).json(firndList)
    } catch (error) {
        return res.status(500).json(error)  
    }
    
}

export const follow = async (req, res) => {
    if(req.body.userId !== req.params.id) {

        try {
            const user = await User.findOne({ _id: req.params.id})
            const currentUser = User.findById(req.body.userId)
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({ $push: {followers: req.body.userId } })
                await currentUser.updateOne({ $push: {followings: req.params.id } })
                return res.status(200).json({ message: 'user has been followed'})
            }else {
                return res.status(403).json({ message : 'You already follow this user'})
            }
        } catch (error) {
            return res.status(500).json(error)  
        }
    }else {
        return res.status(403).json({ message: 'Unauthorized action'})
    }
    
}

export const unfollow = async (req, res) => {
    if(req.body.userId !== req.params.id) {

        try {
            const user = await User.findOne({ _id: req.params.id})
            const currentUser = User.findById(req.body.userId)
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({ $pull: {followers: req.body.userId } })
                await currentUser.updateOne({ $pull: {followings: req.params.id } })
                return res.status(200).json({ message: 'user has been unfollowed'})
            }else {
                return res.status(403).json({ message : 'You dont follow this user'})
            }
        } catch (error) {
            return res.status(500).json(error)  
        }
    }else {
        return res.status(403).json({ message: 'Unauthorized action'})
    }
    
}