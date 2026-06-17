import {Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home"
import Course from "./Course"
import Lessons from "./Lessons"

function App() {

  return (
   <>
   
     <Navbar />
     <Routes>
       <Route path="/home" element={<Home/>} />
       <Route path="/about" element={<h1>About</h1>} />
       <Route path="/course" element={<Course/>} />
       <Route path="/services" element={<h1>Services</h1>} />
       <Route path="/lessons" element={<Lessons/>} />
     </Routes>
  
   </>
  );
}
export default App;