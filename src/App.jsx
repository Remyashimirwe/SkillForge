import {Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home"
import Courses from "./Courses"

function App() {

  return (
   <>
   
     <Navbar />
     <Routes>
       <Route path="/home" element={<h1>Home</h1>} />
       <Route path="/about" element={<h1>About</h1>} />
       <Route path="/Courses" element={<Courses/>} />
       <Route path="/services" element={<h1>Services</h1>} />
     </Routes>
     <Home/>
   </>
  );
}
export default App;