import { Link } from "react-router-dom";
export default function Navbar (){
    return (
        <div 
        className="bg-blue-400/30 h-14 font-semibold flex justify-end items-center">
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
            </ul>
        </div>
    )
}