const express= require('express');
const app= express();



const authRoutes= require ('./Routes/authRoutes.js');
const commentRoutes=require('./Routes/commentRoutes')
const blogRoutes=require('./Routes/blogRoutes')
const dotenv=require('dotenv')

dotenv.config({path:"./.env"})

require('./server')

//middlware


app.use(express.json())

//auth routes
app.use('/auth',authRoutes)
app.use('/comment',commentRoutes)
app.use('/blog',blogRoutes)



app.get('/lists',(req,res)=>{
res.status(200).json({message:"hello zancoyy"})
})




app.listen(3000, () => console.log('Server started on port 3000'));