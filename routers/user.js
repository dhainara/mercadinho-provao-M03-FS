import express from 'express'
import userController from '../controllers/user.js'

const userRouter = express.Router()

userRouter.get("/", userController.findAllUserController);
userRouter.get("/:id", userController.findUserByIdController);
userRouter.post("/", userController.createUserController);
userRouter.delete("/:id", userController.deleteUserController);


export default userRouter