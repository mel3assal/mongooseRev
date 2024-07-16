import { Router } from "express";
import * as userController from './user.controller.js'
const userRouter=Router()
userRouter.route('/').post(userController.addUser).get(userController.getUsers)
userRouter.route('/:id').get(userController.getUser).put(userController.updateUser).
delete(userController.deleteUser)

export default userRouter