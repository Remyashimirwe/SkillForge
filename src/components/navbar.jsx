import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
export default function Navbar (){
    return (
        <div 
        className="bg-blue-400/30 h-14 font-semibold flex justify-end items-center 
        text-gray-900 dark:bg-slate-900 dark:text-white transition-colors duration-500">
            <ul className="px-6 text-md flex gap-x-4">
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
    )
}