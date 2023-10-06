import {FaRegHeart,FaRegComment,FaRegBookmark} from "react-icons/fa"
import BlogAuthor from "../components/BlogAuthor"
import BlogContent from "../components/BlogContent"

function Blog(){
    return (
        <div className="flex my-5 space-x-5">
          <BlogContent/>
          <BlogAuthor/>
        </div>
    )
}

export default Blog