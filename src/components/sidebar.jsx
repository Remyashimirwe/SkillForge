import { useState } from "react"
import { Link } from "react-router-dom"
import { CircleUser as User,MessageSquare as Message,Users as Globe, ListChecks as Tasks,
     SlidersVertical as Settings, LifeBuoy as Support, ShieldCheck as Privacy, ChevronLeft, ChevronRight } from "lucide-react"
export default function Sidebar (){
    const [isOpen, setIsOpen] = useState(true);
    const ToggleSideBar = (e) => {
        setIsOpen(!isOpen)
    }
    return (
        <>
               <div className={`relative hidden md:flex flex-col justify-between h-full px-4 py-6
                    bg-slate-800 text-slate-200 dark:bg-white/90 transition-all duration-800
                        ${isOpen ? 'w-60 rounded-3xl' : 'w-24 px-2'} `}>
                        <button onClick={ToggleSideBar}
                        className="absolute top-3  right-0 cursor-pointer text-white p-1 mx-2 bg-indigo-600 rounded-full ">
                            <ChevronRight className={` transition-transform duration-900 ${isOpen ? 'rotate-180' : ''}`}/></button>
            
                    <ul className="hidden text-md my-14 mx-5 md:flex flex-col gap-2.5 font-sans font-normal">
                        <li>
                            <Link to="/profile" 
                                className={`flex items-center 
                                    ${isOpen ? 'w-full rounded-xl gap-3.5 px-4 py-3 hover:bg-slate-400/30' : 
                                        'p-3 justify-center'}
                                     hover:text-white dark:text-slate-950 dark:hover:bg-indigo-500 dark:hover:text-slate-200 transition-colors duration-300`}>
                                <User className="w-6 h-7 opacity-80 shrink-0"/> 
                                <span className={`${isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 pointer-events-none'}`}>
                                    Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/messages"
                            className={`flex items-center 
                                    ${isOpen ? 'w-full rounded-xl gap-3.5 px-4 py-3 hover:bg-slate-400/30' : 
                                        'p-3 justify-center'}
                                     hover:text-white dark:text-slate-950 dark:hover:bg-indigo-500 dark:hover:text-slate-200 transition-colors duration-300`}>
                                <Message className="w-6 h-7 opacity-80 shrink-0"/> 
                                <span className={`${isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 pointer-events-none'}`}>
                                    Message</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/communities"
                            className={`flex items-center 
                                    ${isOpen ? 'w-full rounded-xl gap-3.5 px-4 py-3 hover:bg-slate-400/30' : 
                                        'p-3 justify-center'}
                                     hover:text-white dark:text-slate-950 dark:hover:bg-indigo-500 dark:hover:text-slate-200 transition-colors duration-300`}>
                                <Globe className="w-6 h-7 opacity-80 shrink-0"/> 
                                <span className={`${isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 pointer-events-none'}`}>
                                    Communities</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/tasks"
                            className={`flex items-center 
                                    ${isOpen ? 'w-full rounded-xl gap-3.5 px-4 py-3 hover:bg-slate-400/30' : 
                                        'p-3 justify-center'}
                                     hover:text-white dark:text-slate-950 dark:hover:bg-indigo-500 dark:hover:text-slate-200 transition-colors duration-300`}>
                                <Tasks className="w-6 h-7 opacity-80 shrink-0"/> 
                                <span className={`${isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 pointer-events-none'}`}>
                                    Task</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="hidden  text-md my-6 mx-5 md:flex flex-col gap-2.5 font-sans font-normal">
                        <li>
                            <Link to="/settings"
                            className={`flex items-center 
                                    ${isOpen ? 'w-full rounded-xl gap-3.5 px-4 py-3 hover:bg-slate-400/30' : 
                                        'p-3 justify-center'}
                                     hover:text-white dark:text-slate-950 dark:hover:bg-indigo-500 dark:hover:text-slate-200 transition-colors duration-300`}>
                                <Settings className="w-6 h-7 opacity-80 shrink-0"/> 
                                <span className={`${isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 pointer-events-none'}`}>
                                    Settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/support"
                            className={`flex items-center 
                                    ${isOpen ? 'w-full rounded-xl gap-3.5 px-4 py-3 hover:bg-slate-400/30' : 
                                        'p-3 justify-center'}
                                     hover:text-white dark:text-slate-950 dark:hover:bg-indigo-500 dark:hover:text-slate-200 transition-colors duration-300`}>
                                <Support className="w-6 h-7 opacity-80 shrink-0"/> 
                                <span className={`${isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 pointer-events-none'}`}>
                                    Support</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/privacy"
                            className={`flex items-center 
                                    ${isOpen ? 'w-full rounded-xl gap-3.5 px-4 py-3 hover:bg-slate-400/30' : 
                                        'p-3 justify-center'}
                                     hover:text-white dark:text-slate-950 dark:hover:bg-indigo-500 dark:hover:text-slate-200 transition-colors duration-300`}>
                                <Privacy className="w-6 h-7 opacity-80 shrink-0"/> 
                                <span className={`${isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 pointer-events-none'}`}>
                                    Privacy</span>
                            </Link>
                        </li>
                    </ul>
                    
                </div>

                {/* {isOpen && (
                    <div 
                    className="md:hidden sm:flex  rounded-xl h-100 flex-col justify-between w-48">
                        <ul className="text-indigo-100 text-md my-6 mx-5 flex flex-col gap-2.5 font-sans font-medium">
                            <li>
                                <Link to="/profile" 
                                    className="flex items-center gap-3.5 px-4 py-3 rounded-xl 
                                         transition-colors duration-200">
                                    <User className="w-5 h-5 opacity-80"/> 
                                    <span>Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/messages"
                                className="flex items-center gap-3.5 px-4 py-3 rounded-xl 
                                        transition-colors duration-200">
                                    <Message className="w-5 h-5 opacity-80"/>
                                    <span>Messages</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/communities"
                                className="flex items-center gap-3.5 px-4 py-3 rounded-xl 
                                         transition-colors duration-200">
                                    <Globe className="w-5 h-5 opacity-80"/>
                                    <span>Communities</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/tasks"
                                className="flex items-center gap-3.5 px-4 py-3 rounded-xl 
                                        transition-colors duration-200">
                                    <Tasks className="w-5 h-5 opacity-80"/>
                                    <span>Tasks</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="text-indigo-100 text-md my-6 mx-5 md:flex flex-col gap-2.5 font-sans font-medium">
                            <li>
                                <Link to="/settings"
                                className="flex items-center gap-3.5 px-4 py-3 rounded-xl 
                                 transition-colors duration-200">
                                <Settings  className="w-5 h-5 opacity-80"/>
                                <span>Settings</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/support"
                                className="flex items-center gap-3.5 px-4 py-3 rounded-xl 
                                 transition-colors duration-200">
                                <Support className="w-5 h-5 opacity-80"/>
                                <span>Support</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy"
                                className="flex items-center gap-3.5 px-4 py-3 rounded-xl 
                                     transition-colors duration-200"className="flex items-center gap-3.5 px-4 py-3 rounded-xl 
                                     transition-colors duration-200">
                                    <Privacy className="w-5 h-5 opacity-80"/>
                                    <span>Privacy</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )} */}
        </>
        
    )
}