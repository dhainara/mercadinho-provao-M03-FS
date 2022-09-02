import userService from '../services/user.js'
import authService from '../auth/service.js'
async function findAllUserController(req, res) {
  try {
    const allUsers = await userService.findAllUserService()
    res.status(200).send(allUsers)
  } catch (err) {
    console.log(err)
    return res.status(500).send({ message: err.message })
  }
}

async function findUserByIdController(req, res) {
  try {
    const id = req.params.id
    const userSelected = await userService.findUserByIdService(id)
    res.send(userSelected)
  } catch (err){
    console.log(err)
    return res.status(400).send({ message: err.message })
  };
}

async function createUserController(req, res) {
  try {
    const body = req.body
    const newUser = await userService.createUserService(body)
    const token = authService.generateToken(body.id)
    return res.status(200).send(newUser, token)
  } catch (err) {
    console.log(err)
    return res.status(400).send({ message: err.message })
  }
}

async function deleteUserController(req, res) {
  try {
      const id = req.params.id
      const userToBeDeleted = await userService.deleteUserService(id)
      res.status(200).send('User Deleted!')
    } catch (err) {
      let count = User.length
      if (count === 0) {
        console.log(err)
        res.status(400).send({message: `Nenhum anime com esse id foi encontrado.\nHá ${count} id's registrados. Verifique a lista e tente novamente com um id existente!`})
      }
    }
}

const userController = {
  createUserController,
  findAllUserController,
  findUserByIdController,
  deleteUserController
}

export default userController