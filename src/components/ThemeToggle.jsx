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
        className="cursor-pointer" >
            {isDark ? 
            <Sun/>  : <Moon/>
        }
        </button>
    )
}