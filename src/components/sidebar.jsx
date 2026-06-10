import { Link } from "react-router-dom"
import { CircleUser as User,MessageSquare as Message,Users as Globe, ListChecks as Tasks,
     SlidersVertical as Settings, LifeBuoy as Support, ShieldCheck as Privacy } from "lucide-react"
export default function Sidebar (){
    return (
        <div className="bg-indigo-600 rounded-t-3xl flex flex-col justify-between rounded-b-2xl w-64 px-4 py-6">
            <ul className=" text-indigo-100 text-md my-6 mx-5 flex flex-col gap-2.5 font-sans font-medium">
                <li>
                    <Link to="/profile" 
                        className="flex items-center gap-3.5 px-4 py-3 rounded-xl hover:bg-indigo-700/50
                            hover:text-white transition-colors duration-200">
                        <User className="w-5 h-5 opacity-80"/> 
                        <span>Profile</span>
                    </Link>
                </li>
                <li>
                    <Link to="/messages"
                    className="flex items-center gap-3.5 px-4 py-3 rounded-xl hover:bg-indigo-700/50
                            hover:text-white transition-colors duration-200">
                        <Message className="w-5 h-5 opacity-80"/>
                        <span>Messages</span>
                    </Link>
                </li>
                <li>
                    <Link to="/communities"
                    className="flex items-center gap-3.5 px-4 py-3 rounded-xl hover:bg-indigo-700/50
                            hover:text-white transition-colors duration-200">
                        <Globe className="w-5 h-5 opacity-80"/>
                        <span>Communities</span>
                    </Link>
                </li>
                <li>
                    <Link to="/tasks"
                    className="flex items-center gap-3.5 px-4 py-3 rounded-xl hover:bg-indigo-700/50
                            hover:text-white transition-colors duration-200">
                        <Tasks className="w-5 h-5 opacity-80"/>
                        <span>Tasks</span>
                    </Link>
                </li>
            </ul>
            <ul className=" text-indigo-100 text-md my-6 mx-5 flex flex-col gap-2.5 font-sans font-medium">
                <li>
                    <Link to="/settings"
                    className="flex items-center gap-3.5 px-4 py-3 rounded-xl hover:bg-indigo-700/50
                     hover:text-white transition-colors duration-200">
                    <Settings  className="w-5 h-5 opacity-80"/>
                    <span>Settings</span>
                    </Link>
                </li>
                <li>
                    <Link to="/support"
                    className="flex items-center gap-3.5 px-4 py-3 rounded-xl hover:bg-indigo-700/50
                      hover:text-white transition-colors duration-200">
                    <Support className="w-5 h-5 opacity-80"/>
                    <span>Support</span>
                    </Link>
                </li>
                <li>
                    <Link to="/privacy"
                    className="flex items-center gap-3.5 px-4 py-3 rounded-xl hover:bg-indigo-700/50
                         hover:text-white transition-colors duration-200"className="flex items-center gap-3.5 px-4 py-3 rounded-xl hover:bg-indigo-700/50
                        hover:text-white transition-colors duration-200">
                        <Privacy className="w-5 h-5 opacity-80"/>
                        <span>Privacy</span>
                    </Link>
                </li>
            </ul>
            
        </div>
    )
}