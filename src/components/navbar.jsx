import { Link } from "react-router-dom";
import { Menu, X} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Component as Logo, PanelLeftOpen, PanelLeftClose } from "lucide-react";
import { useState } from "react";

export default function Navbar (){
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <nav 
        className="sticky top-0 border-b border-slate-200
        flex items-center justify-between px-6 py-4 lg:px-14 transition-all duration-500 z-50">

            <div className="flex items-center gap-2 font-sans font-bold text-xl ">
                <span className="bg-indigo-600 text-white p-1.5 rounded-lg"><Logo/></span>
                <span>Jallen</span>

            </div>

            <ul className="hidden md:flex items-center gap-10 font-semibold text-slate-700  text-sm">
                <li className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white  transition-colors">
                    <Link to="/">Home </Link>
                </li>
                <li className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white  transition-colors">
                    <Link to="/about">About</Link>
                </li>
                <li className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white  transition-colors">
                    <Link to="/services">Services</Link>
                </li>
            </ul>

            <div className="flex items-center gap-3">
                
                <Link to="/login"
                    className="hidden md:flex text-md font-medium text-slate-600 hover:text-slate-900  rounded-lg
                      dark:text-slate-300 dark:hover:text-white
                      transition-colors px-4 py-2">
                    Login</Link>
                <Link to="/register"
                    className="hidden md:flex text-sm font-medium text-white px-4 py-2.5
                        bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600
                    rounded-xl shadow-md shadow-indigo-600/20 transition-all">
                    Get started</Link>
                <div className="hidden md:flex h-7 w-0.5   mx-1"></div>
                <ThemeToggle/>
            </div>

            <button className='flex justify-center items-center w-12 h-12 hover:cursor-pointer md:hidden rounded-full '
                onClick={toggleMenu}>
                    {isOpen ? <X className='w-7 h-7 '/> : <Menu className='w-7 h-7 '/>} 
            </button>
                
                {isOpen && (
                    <div className="absolute top-16 right-1 md:hidden sm:flex
                 items-center px-3 rounded-sm w-40 ">
                    <ul className="py-2 flex flex-col gap-y-2">
                        <li>
                            <Link to="/"> Home </Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Get started</Link>
                        </li>
                    </ul>
                    </div>
                )}
        </nav>
    )
}