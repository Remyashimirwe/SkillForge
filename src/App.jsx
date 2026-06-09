import Navbar from "./components/navbar";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/home";
import About from './pages/about';
import Services from './pages/services';
import Login from './pages/login';
import Register from './pages/register';

function App(){

  return (

    <div className="">
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/about' element = {<About/>}></Route>
        <Route path='/services' element = {<Services/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/register' element = {<Register/>}></Route>
      </Routes>
    </div>
  );
}
export default App;