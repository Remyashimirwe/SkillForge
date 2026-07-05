import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Login from './pages/login';
import Course from './pages/courseDetails';
import Register from './pages/register';
import Profile from './pages/profile';
import Message from './pages/messages'
import Communities from './pages/communities';
import Tasks from './pages/tasks';
import Settings from './pages/settings';
import Support from './pages/support';
import Privacy from './pages/privacy';
import { Dashboard } from './pages/lessonDashboard';
import axios from 'axios';
import { Toaster } from 'react-hot-toast'; //for error/success Notification

axios.defaults.baseURL= 'http://localhost:5000'; // PORT server
axios.defaults.withCredentials= true;  // give all credentrials to connect to that server port

function App() {
  const location = useLocation()
  const hideSidebarRoutes = ['/login', '/register'];
  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname)

  return (
    <>
      <div className='flex flex-col h-screen max-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-200 transition-colors duration-800'>
        <Navbar/>
        <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
        <div className='flex flex-1 h-full overflow-hidden'>
          {!shouldHideSidebar && <Sidebar/>}
        <main className=' py-12  flex flex-1 justify-center overflow-y-auto'>
          <Routes>
            <Route path='/' element = {<Home/>}></Route>
            <Route path='/about' element = {<About/>}></Route>
            <Route path='/services' element = {<Services/>}></Route>
            <Route path='/login' element = {<Login/>}></Route>
            <Route path='/register' element = {<Register/>}></Route>
            <Route path='/courseDetails/:title' element = {<Course/>}></Route>
            <Route path='/profile' element = {<Profile/>}></Route>
            <Route path='/messages' element = {<Message/>}></Route>
            <Route path='/communities' element = {<Communities/>}></Route>
            <Route path='/tasks' element = {<Tasks/>}></Route>
            <Route path='/settings' element = {<Settings/>}></Route>
            <Route path='/support' element = {<Support/>}></Route>
            <Route path='/privacy' element = {<Privacy/>}></Route>
            <Route path= '/dashboard' element = {<Dashboard/>}></Route>
          </Routes>
        </main>
      </div>
      </div>

    </>
  )
}

export default App