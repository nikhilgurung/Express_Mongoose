import mongoose from 'mongoose'
const todomodel = new mongoose.Schema(
  {
    content:{
      type:String,
      required:true,
      
    },
    complete:{
      type:Boolean,
      default:false
    },
    createdBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
    subTodos:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subtodo"
      }//Array of sub_todos
    ]

  },{timestamps:true}
  )





export const Todomodel = mongoose.model("Todomodel",todomodel)