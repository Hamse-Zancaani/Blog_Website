const mongoose= require("mongoose")

const commentSchmea=mongoose.Schema({
    comment:{
        type: String
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"

    },
    blog:mongoose.Types.ObjectId,
    ref:"blog"
})

const commentModel=mongoose.model("comment",commentSchmea)

module.exports=commentModel