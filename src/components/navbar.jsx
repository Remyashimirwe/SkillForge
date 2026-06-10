import { Link } from "react-router-dom";
import { Menu, X} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Component as Logo } from "lucide-react";
import { useState } from "react";

export default function Navbar (){
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
}
    return (
        <nav 
        className="sticky top-0 bg-white border-b border-slate-100
        flex items-center justify-between px-6 py-4 lg:px-14
         dark:border-slate-800 dark:bg-slate-900 transition-all duration-500 z-50">

            <div className="flex items-center gap-2 font-sans font-bold text-xl dark:text-white ">
                <span className="bg-indigo-600 text-white p-1.5 rounded-lg"><Logo/></span>
                <span>Jallen</span>
            </div>

            <ul className="hidden md:flex items-center gap-10 font-semibold text-slate-700 dark:text-slate-300 text-sm">
                <li className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                    <Link to="/">Home </Link>
                </li>
                <li className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                    <Link to="/about">About</Link>
                </li>
                <li className="hover:text-indigo-600 dark:hover:text-whitetransition-colors">
                    <Link to="/services">Services</Link>
                </li>
            </ul>

            <div className="flex items-center gap-3">
                
                <Link to="/login"
                    className="text-md font-medium text-slate-600 hover:bg-slate-200 rounded-lg
                     dark:hover:bg-slate-400 dark:text-slate-300 hover:text-indigo-600
                     dark:hover:text-indigo-800 transition-colors px-4 py-2">
                    Login</Link>
                <Link to="/register"
                    className="text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5
                    rounded-xl shadow-md shadow-indigo-600/20 transition-all">
                    Get started</Link>
                <div className="h-7 w-0.5 bg-slate-700 dark:bg-slate-50 mx-1"></div>
                <ThemeToggle/>
            </div>

            <button className='flex justify-center items-center w-12 h-12 hover:cursor-pointer md:hidden rounded-full hover:bg-gray-500'
                onClick={toggleMenu}>
                    {isOpen ? <X className='w-7 h-7 bg-orange-400'/> : <Menu className='w-7 h-7 bg-green-300'/>} 
            </button>
                
                {isOpen && (
                    <div className="absolute top-16 right-1 md:hidden sm:flex
                 items-center px-3 rounded-sm w-40 bg-emerald-700">
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