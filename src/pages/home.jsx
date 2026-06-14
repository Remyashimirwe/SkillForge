import HeroSection from "../components/HeroSection"
import CoursesSection from "../components/CoursesSection"
function Home (){
    return(
        <div className="w-full flex flex-col items-center">
            <HeroSection />
            <CoursesSection />

            <h1>Home Page content...!</h1>
        </div>
        
    )
}

export default Home