const mongoose= require("mongoose")

const commentSchema=mongoose.Schema({
    comment:{
        type: String
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"

    },
    blog:{
        type:mongoose.Types.ObjectId,
     ref:"blog"
    }
})

const commentModel=mongoose.model("comment",commentSchema)

module.exports=commentModel