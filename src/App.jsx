import {Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home"
import Course from "./Course"
import Lessons from "./Lessons"
import Login from "./Login"
import Signup from"./Signup"
import Services from"./Services"

function App() {

  return (
   <>
   
     <Navbar />
     <Routes>
       <Route path="/home" element={<Home/>} />
       <Route path="/about" element={<h1>About</h1>} />
       <Route path="/course" element={<Course/>} />
       <Route path="/services" element={<Services/>} />
       <Route path="/lessons" element={<Lessons/>} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="*" element={<Home />} />
     </Routes>
  
   </>
  );
}
export default App;