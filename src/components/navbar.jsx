import { Link } from "react-router-dom";
import { Menu, X} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Navbar (){
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
}
    return (
        <div 
        className="bg-blue-400/30 h-14 font-semibold flex justify-end items-center 
        text-gray-900 dark:bg-slate-900 dark:text-white transition-colors duration-500">
        <button className='flex justify-center items-center w-12 h-12 hover:cursor-pointer md:hidden rounded-full hover:bg-gray-500'
            onClick={toggleMenu}>
                {isOpen ? <X className='w-7 h-7 bg-orange-400'/> : <Menu className='w-7 h-7 bg-green-300'/>} 
        </button>

            <ul className="hidden md:flex px-6 text-md gap-x-4">
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
                <li>
                    <ThemeToggle/>
                </li>
            </ul>
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
                        <li>
                                <ThemeToggle/>
                        </li>
                    </ul>
                    </div>
                )}
        </div>
    )
}