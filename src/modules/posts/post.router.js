import { Router } from "express";
import * as postController from './post.controller.js'
const postRouter=Router()
postRouter.route('/').post(postController.addPost).get(postController.getPosts)
postRouter.route('/:id').get(postController.getPost).put(postController.updatePost).
delete(postController.deletePost)

export default postRouter