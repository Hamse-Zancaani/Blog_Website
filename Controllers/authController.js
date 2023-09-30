
const User= require('../Models/userModel')
const bcrypt=require("bcrypt")

exports.login=async(req,res)=>{

  try{
    // if the email is right
const{email}=req.body
    const findUser= await User.findOne({email})
    if(!findUser){
       res.status(400).json({message:"email is incorrect"})
    }
     //password is incorrect

     const comparedPasswords= await bcrypt.compare(password,findUser.password)
     if(comparedPasswords===false){
     res.status(404).json({message:"password is incorrect"})}

  }catch(e){
    res.status(404).json({message:"error is occured please try again"})

  }
  }


exports.signup = async(req,res)=>{

  try{

    const{email,password}= req.body
    const findUser=await User.findOne({email})
    if(findUser){
      return res.status(400).json({message:"email is already taken"})
    }
//hashed password
const hashedPassword= await bcrypt.hash(password,10)
  req.body.password= hashedPassword
    //save user model info
    await User.create(req.body)

   res.status(200).json({message:"you have created successfully"})
  }catch{
    res.status(404).json({message:"oops! can't create this user"})
  }
 
}
