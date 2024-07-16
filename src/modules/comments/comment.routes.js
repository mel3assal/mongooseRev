import { Router } from "express";
import * as commentController from './comment.controller.js'
const commentRouter=Router()
commentRouter.route('/').post(commentController.addComment).get(commentController.getComments)
commentRouter.route('/:id').get(commentController.getComment).put(commentController.updateComment).
delete(commentController.deleteComment)

export default commentRouter