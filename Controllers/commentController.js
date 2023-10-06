
const comment=require("../Models/commentModel")

exports.comments=async(req,res)=>{

    try{

        const comments= await comment.find({}).populate("User").populate("blog")
    res.status(200).json(comments)
    }catch(e){
        res.status(400).json({message:"error occured please try agin"})
    }
}
exports.comment=async(req,res)=>{

    try{
        const{id}=req.params
          const singleComment= await comment.findById(id)
          res.status(200).json(singleComment)
  
      
  
      }catch(e){
          res.status(200).json({message:"oops! we could'nt find the comment"})
      }
      
  }
  




exports.saveComment=async(req,res)=>{

    try{

        await comment.create(req.body)
        res.status(200).json({message:"here save comment"})
    }catch(e){
        res.status(400).json({message:"coudl'nt saved try again!"})}
    }
    
 

    exports.editComment=async(req,res)=>{

        try{
            const{id}=req.params
            await comment.findByIdAndUpdate(id,req.body)

            res.status(200).json({message:'here edit comments'})
        }catch(e){
            res.status(400).json({message:'error occured please try again'})
        }
       
    }

    exports.deleteComment=async(req,res)=>{
        try{
            const {id}=req.params
            await comment.findBYIdAndDelete(id,req.body)
            res.status(200).json({message:"here delete comment"})
        }catch(e){
            res.status(400).json({message:"coudl'nt delete comment please try again!"})
        }
       
    }