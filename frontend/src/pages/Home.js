import BlogCard from "../components/BlogCard"
import SideBar from "../components/SideBar"
import ListCard from "../components/ListCard"
import { useEffect ,useState} from "react"

function Home(){

const[blogs,setBlogs]=useState([])



useEffect(()=>{
    //fetch api 
    fetch("http://localhost:8000/blog")
    .then((res)=>{return res.json()})
    .then((data)=>setBlogs(data.blogs))
    .catch((e)=>console.log(e))
})




    return (
        <div className="flex justify-between space-x-5 mt-5">
           <SideBar/>
            <div className="flex-1">
               {blogs.map(()=> <BlogCard/>)}
            
               
            </div>
            <div className="basis-1/4">
                <div className="bg-slate-50 py-2 rounded-md">
                    <div className="flex justify-between items-center px-5 py-2">
                        <h3 className="font-bold">Listings</h3>
                        <small className="text-blue-700 font-semibold">See all</small>
                    </div>
                    <ListCard/>
                    <ListCard/>
                    <ListCard/>
                    <ListCard/>
                </div>
            </div>
        </div>
    )
}

export default Home

