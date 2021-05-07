import userRoutes from './users.js'
import authRoutes from './auth.js'
import postRoutes from './post.js'


export const registerRoutes = (app) => {
    app.use('/api/users', userRoutes)
    app.use('/api/auth', authRoutes)
    app.use('/api/posts', postRoutes)
}