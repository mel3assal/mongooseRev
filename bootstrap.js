import commentRouter from "./src/modules/comments/comment.routes.js"
import postRouter from "./src/modules/posts/post.router.js"
import userRouter from "./src/modules/user/user.routes.js"

const bootstrap=(express,app)=>{
    app.use('/users',userRouter)
    app.use('/posts',postRouter)
    app.use('/comments',commentRouter)
}
export default bootstrap