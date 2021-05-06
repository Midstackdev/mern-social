import userRoutes from './users.js'
import authRoutes from './auth.js'


export const registerRoutes = (app) => {
    app.use('/api/users', userRoutes)
    app.use('/api/auth', authRoutes)
}