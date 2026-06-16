import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X,} from "lucide-react";


function Navbar() {
  const [scrolled,setScrolled] =useState(false)
  const [isOpen,setIsOpen] = useState (false)
     const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  useEffect(() => {
    // Toggle global dark class and adjust body styles so the whole page switches
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      // set sensible defaults for backgrounds and text so non-tailwind elements also flip
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#f7f7f7';
      localStorage.setItem('darkMode', 'true');
      console.log('Dark mode enabled');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
      localStorage.setItem('darkMode', 'false');
      console.log('Dark mode disabled');
    }
  }, [darkMode]);
    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="">
       <header 
        className={`fixed h-18 top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80  backdrop-blur-md border-b border-border/50  shadow-sm" : " bg-transparent "
        }`}
      >
<nav className={`WIN ${darkMode ? 'bg-black text-gray-100' : 'bg-[#060c06] text-white'}  flex  justify-center gap-5 items-center p-4`}>
      <h1>SkillForge</h1>
      <ul className="mon hidden md:flex space-x-4 gap-10">
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
        {darkMode ? <Sun className="icon" size={24} /> : <Moon className="icon" size={24} />}
      </button>
      <Menu className="md:hidden cursor-pointer" onClick={() => setIsOpen(true)} />
    </nav>
     </header>
    {isOpen && (
      <div className={`WIN ${darkMode ? 'bg-black text-gray-100' : 'bg-[#090909] text-white'} wii flex flex-col `}>
      <ul className="flex flex-col space-y-4 gap-8">
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
   <X className="cursor-pointer" onClick={() => setIsOpen(false)} />

    </div>
    )}
   
    </div>
  );
}
export default Navbar;