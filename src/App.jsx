import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  

  return (
    <>
      <div className='flex flex-col h-screen'>
        <Navbar/>
        <div className='flex flex-1'>
          <Sidebar/>
        <main className='bg-amber-300/50  flex flex-1 justify-center overflow-y-auto'>
          <Routes>
            <Route path='/' element = {<Home/>}></Route>
            <Route path='/about' element = {<About/>}></Route>
            <Route path='/services' element = {<Services/>}></Route>
            <Route path='/login' element = {<Login/>}></Route>
            <Route path='/register' element = {<Register/>}></Route>
          </Routes>
        </main>
      </div>
      </div>

    </>
  )
}

export default App