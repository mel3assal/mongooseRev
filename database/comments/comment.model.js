import mongoose, { model, Schema, Types} from "mongoose";

const schema=new Schema({
    text:String,
    createdBy:{
        type:Types.ObjectId,
        ref:'User'
    },
    post:{
        type:Types.ObjectId,
        ref:'Post'
    }

})

export const Comment=model('Comment',schema)
