import { User } from '../database/schema/schemas.js'
import UserEntity from '../entity/user.js'
//import UserEntity from '../entities/users.js'

async function findAllUserService() {
    return await User.find()

    if (Users.lenght == 0) {
        return res.send("Não há Usuarios registrados.")
    } 
}

async function findUserByIdService(id) {
    const user = await User.findOne({id: id})
    return user
}

async function createUserService(body) {
    const newUser = new UserEntity(body)
    newUser.validateUser()
    const userCreatedpush = await User.create(newUser)

    return userCreatedpush
}

async function updateUserService(id, body) {
    const user = await User.findOneAndReplace({ id: id }, body, { new: true })
    user.validateUser()
    return user
}

async function deleteUserService(id) {
    return await User.findOneAndDelete({ id: id })
}

const userService = {
    findAllUserService,
    findUserByIdService,
    updateUserService,
    createUserService,
    deleteUserService
}

export default userService