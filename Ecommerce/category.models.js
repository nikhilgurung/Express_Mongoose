
import mongoose from "mongoose";
import { stringify } from "querystring";
const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
},{timestamps:true})






export const category = mongoose.model("category",categorySchema)