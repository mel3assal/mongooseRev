import { User } from "../../../database/user/user.model.js"

const addUser=async(req,res,next)=>{
    const user=await User.insertMany(req.body)
    res.json({message:"success",user})
}
const getUsers=async(req,res,next)=>{
    const users=await User.find()
    res.json(users)
}

const getUser=async(req,res,next)=>{
    const user=await User.findById(req.params.id)
    res.json(user)
}
const updateUser=async(req,res,next)=>{
    const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(user)
}
const deleteUser=async(req,res,next)=>{
    const user=await User.findByIdAndDelete(req.params.id,{new:true})
    res.json(user)
}

export {addUser,getUsers,getUser,updateUser,deleteUser}