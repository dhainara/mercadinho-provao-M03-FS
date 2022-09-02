import {User} from '../database/schema/schemas.js'
import jwt from'jsonwebtoken'

const loginService = (email) => User.findOne({ email: email }).select("+password");

const generateToken = (userId) => jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: 86400 });


const authService = {
    loginService,
    generateToken
}

export default authService