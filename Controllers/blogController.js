const Blog= require('../Models/blogModel')

exports.blogs=async(req,res)=>{
    // get all blog

    try{

        const blogs= await Blog.find({})
        res.status(200).json(blogs)


    }catch(e){
        res.status(404).json({message:"oops!can't find the blogs"})
    }

}

exports.blog=async(req,res)=>{
    // get single bog

    try{
      const{id}=req.params
        const singleBlog= await Blog.findById(id).populate("User")
        res.status(200).json(singleBlog)

    

    }catch(e){
        res.status(200).json({message:"oops! we could'nt find the blog"})
    }
    
}

exports.saveBlog=async(req,res)=>{
    // save a blog
    try{
     const saveBlog= await Blog.create(req.body)
        res.status(200).json(saveBlog)

    }catch(e){
        res.status(404).json("oops! we could'nt create")
    }
    

}
 exports.editBlog=async(req,res)=>{

    try{

        const{id}=req.params
         const editBlog= await Blog.findByIdAndUpdate(id)
        res.status(200).json(editBlog)

    }catch(e){
       res.status(404).json({message:"can't edit the blog"})
    }
   
 }

 exports.deleteBlog=async(req,res)=>{

    try{


        const{id}=req.params
        const deleteBlog= await Blog.findByIdAndDelete(id)


        res.status(200).json(deleteBlog)
    }catch(e){
        res.status(404).json({message:"can't deleted the blog"})
    }
   
 }

 