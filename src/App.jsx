import {Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";

function App() {

  return (
   <>
   
     <Navbar />
     <Routes>
       <Route path="/home" element={<h1>Home</h1>} />
       <Route path="/about" element={<h1>About</h1>} />
       <Route path="/contact" element={<h1>Contact</h1>} />
       <Route path="/services" element={<h1>Services</h1>} />
     </Routes>
   </>
  );
}
export default App;