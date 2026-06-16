import { useState } from "react";
import HeroSection from "../components/HeroSection"
import CoursesSection from "../components/CoursesSection"
import Navbar from "../components/navbar";
function Home (){
     const [isOpen, setIsOpen] = useState(true);
    return(
        <div className="w-full flex flex-col items-center">
                <HeroSection />
                <CoursesSection />
        </div>
        
    )
}

export default Home