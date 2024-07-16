import { model, Schema } from "mongoose";

const schema=new Schema({
    name:String,
    email:{type:String,unique:true},
    password:String
})

export const User=model('User',schema)
