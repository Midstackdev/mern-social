import userRoutes from './users.js'
import authRoutes from './auth.js'
import postRoutes from './post.js'
import conversatonRoutes from './conversation.js'
import messageRoutes from './message.js'


export const registerRoutes = (app) => {
    app.use('/api/users', userRoutes)
    app.use('/api/auth', authRoutes)
    app.use('/api/posts', postRoutes)
    app.use('/api/conversation', conversatonRoutes)
    app.use('/api/message', messageRoutes)
}