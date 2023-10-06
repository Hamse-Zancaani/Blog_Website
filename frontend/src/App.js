import Header from "./components/Header";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './pages/Login'
import Signup from "./pages/Signup";
import Home from "./pages/Home"
import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard";
import New from "./pages/New"
import Profile from "./pages/Profile"
import ChangePassword from "./pages/ChangePassword";


function App() {
  return (
   <div >
      <BrowserRouter>
      <Header/>
      <div className="px-20  m-auto">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/new" element={<New/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/change" element={<ChangePassword/>}/>
        </Routes>
        </div>
      </BrowserRouter>

   </div>
  );
}

export default App;