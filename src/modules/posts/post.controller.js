import { Post } from "../../../database/post/post.model.js"

const addPost=async(req,res,next)=>{
    const post=await Post.insertMany(req.body)
    res.json({message:"success",post})
}
const getPosts=async(req,res,next)=>{
    const Posts=await Post.find().populate('createdBy','name -_id')
    res.json(Posts)
}

const getPost=async(req,res,next)=>{
    const post=await Post.findById(req.params.id).populate('createdBy','name -_id')
    res.json(post)
}
const updatePost=async(req,res,next)=>{
    const post=await Post.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(post)
}
const deletePost=async(req,res,next)=>{
    const post=await Post.findByIdAndDelete(req.params.id,{new:true})
    res.json(post)
}

export {addPost,getPosts,getPost,updatePost,deletePost}