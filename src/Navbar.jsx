import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import { Sun, Moon,Menu ,X} from "lucide-react";

function Navbar() {
  const [isOpen,setIsOpen] = useState (false)
     const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  useEffect(() => {
    // Toggle a global dark class so the whole page can switch styles
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
      console.log('Dark mode enabled');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
      console.log('Dark mode disabled');

    }
  }, [darkMode]);
  return (
    <>
<nav className={`WIN ${darkMode ? 'bg-black text-gray-100' : 'bg-[#133215] text-white'}  flex  justify-center gap-5 items-center p-4`}>
      <h1>SkillForge</h1>
      <ul className="mon flex  space-x-4 gap-10">
        <li>
          <Link to="/" className="relative text-inherit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full  ">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="relative text-inherit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full  ">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="relative text-inherit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full  ">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/services" className="relative text-inherit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full  ">
            Services
          </Link>
        </li>
      </ul>
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
      {<Menu id="waa" onClick={() =>setIsOpen(true)}/>}
   
    </nav>
    {isOpen && (
      <div className={`WIN ${darkMode ? 'bg-black text-gray-100' : 'bg-[#133215] text-white'} wii flex flex-col `}>
      <ul className="wa hidden  flex-col space-x-4 gap-10">
        <li>
          <Link to="/" className="relative text-inherit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full  ">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="relative text-inherit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full  ">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="relative text-inherit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full  ">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/services" className="relative text-inherit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full  ">
            Services
          </Link>
        </li>
      </ul>
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
   <X onClick={() => setIsOpen(false)}/>
    </div>
    )}
    </>
    
  );
}
export default Navbar;