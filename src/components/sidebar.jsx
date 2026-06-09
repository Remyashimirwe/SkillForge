import { Link } from "react-router-dom"
export default function Sidebar (){
    return (
        <div className="bg-indigo-500 w-44">
            <ul className=" text-white text-lg my-4 flex items-center flex-col gap-3 font-serif">
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/messages">Messages</Link>
                </li>
                <li>
                    <Link to="/communities">Communities</Link>
                </li>
                <li>
                    <Link to="/tasks">Tasks</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
                <li>
                    <Link to="/support">Support</Link>
                </li>
                <li>
                    <Link to="/privacy">Privacy</Link>
                </li>
            </ul>
        </div>
    )
}