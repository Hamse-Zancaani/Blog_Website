const mongoose= require("mongoose")

const blogSchema= mongoose.Schema({
    title:{
        type:String
    },
    content:{
        type:String
    },
    user:{
        type:mongoose.Types.objectId,
        ref:"User"
    }
})

const blogModel= mongoose.model("blog",blogSchema)
module.exports= blogModel