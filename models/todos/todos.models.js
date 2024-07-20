import mongoose from 'mongoose'
const todomodel = new mongoose.Schema(
  {
    content:{
      type:String,
      required:true,
      
    },
    complete:{
      type:true,
      default:false
    },
    createdBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"User"
    }

  },{timestamps:true}
  )





export const Todomodel = mongoose.model("Todomodel",todomodel)