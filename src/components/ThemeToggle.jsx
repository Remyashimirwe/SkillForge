import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
export default function ThemeToggle(){

    const [isDark, setIsDark] = useState(false);
    
    useEffect(()=> {
        document.documentElement.classList.toggle('dark', isDark)
    }, [isDark])

    return(
        <button 
        onClick={() => setIsDark(!isDark)}
        className="cursor-pointer p-2 text-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 hover:bg-slate-100 rounded-full transition-colors" >
            {isDark ? 
            <Sun className="w-6 h-6"/>  : <Moon className="w-6 h-6"/>
        }
        </button>
    )
}