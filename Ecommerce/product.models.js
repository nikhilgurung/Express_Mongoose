s
import mongoose from "mongoose";
import { stringify } from "querystring";
const productSchema = new mongoose.Schema({
    description:{
        type:string,
        required:true
    },
    name:{
        type:string,
        required:true
    },
    productImage:{
        type:String
    },
    price:{
        type: Number,
        default: 0
    },
    stock:{
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"category",
        required: true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})





export const product = mongoose.model("product",productSchema)