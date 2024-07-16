
import { Comment } from './../../../database/comments/comment.model.js';
const addComment=async(req,res,next)=>{
    const comment=await Comment.insertMany(req.body)
    res.json({message:"success",comment})
}
const getComments=async(req,res,next)=>{
    const Comments=await Comment.find().populate('createdBy','name -_id').populate('post','title -_id')
    res.json(Comments)
}

const getComment=async(req,res,next)=>{
    const comment=await Comment.findById(req.params.id).populate('createdBy','name -_id').populate('post','title -_id')
    res.json(comment)
}
const updateComment=async(req,res,next)=>{
    const comment=await Comment.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(comment)
}
const deleteComment=async(req,res,next)=>{
    const comment=await Comment.findByIdAndDelete(req.params.id,{new:true})
    res.json(comment)
}

export {addComment,getComments,getComment,updateComment,deleteComment}