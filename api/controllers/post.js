import Post from '../models/post.js'
import User from '../models/user.js'

export const index = (req, res) => {
    res.status(200).json({ name: 'Alred Smith', email: 'alfy@admin.com'})
}

export const create = async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save()
        return res.status(200).json(savedPost)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const update = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        
        if(post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body })
            return res.status(200).json({ message: 'the post is updated'})
        }else {
            return res.status(403).json({ message: 'Unauthorized action'})
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const remove = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(!post) return res.status(404).json({ message: "No post found" })
        
        if(post.userId === req.body.userId) {
            await post.deleteOne({ _id: req.params.id })
            return res.status(200).json({ message: 'the post is deleted'})
        }else {
            return res.status(403).json({ message: 'Unauthorized action'})
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const like = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(!post) return res.status(404).json({ message: "No post found" })
        
        if(!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: {likes: req.body.userId} })
            return res.status(200).json({ message: 'the post is has been liked'})
        }else {
            await post.updateOne({ $pull: {likes: req.body.userId} })
            return res.status(200).json({ message: 'the post is has been unliked'})
            
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const show = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(!post) return res.status(404).json({ message: "No post found" })
        return res.status(200).json(post)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const postFromFollowing = async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.id)
        const userPosts = await Post.find({ userId: currentUser._id })
        const followingPosts = await Promise.all(
            currentUser.followings.map((followingId) => {
                return Post.find({ userId: followingId })
            })
        )
        
        return res.status(200).json(userPosts.concat(...followingPosts))
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const postFromUser = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username})
        const posts = await Post.find({ userId: user._id })
        
        return res.status(200).json(posts)
    } catch (error) {
        return res.status(500).json(error)
    }
}