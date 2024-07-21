import mongoose from 'mongoose'
const subtodo = new mongoose.Schema(
  {
    content:{
      type:String,
      required:true

    },
    complete:{
      type: Boolean,
      default:false
    },
    Createdby:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
  }

  },{timestamps:true}
  )



export const Subtodo = mongoose.model("Subtodo",subtodo)