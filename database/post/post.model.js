import mongoose, { model, Schema, Types } from "mongoose";

const schema=new Schema({
    title:String,
    body:String,
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }

})

export const Post=model('Post',schema)
