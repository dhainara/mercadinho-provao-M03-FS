import {User} from '../database/schema/schemas.js'
import jwt from'jsonwebtoken'

async function loginService(email) {
    const login = await User.findOne({ email: email }).select("+password")
}

async function generateToken(userId) {
    jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: 86400 })
}

const authService = {
    loginService,
    generateToken
}

export default authService