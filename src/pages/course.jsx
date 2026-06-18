import { useEffect } from "react";

import { useNavigate, useLocation, useParams } from "react-router-dom";

function Course() {
    const location = useLocation();
    const navigate = useNavigate();
    const course = location.state?.courseData;

    useEffect( () => {
        if(!course){
            navigate('/course');
        }
    },[course, navigate]);
    if (!course){
        return null
    }
    
    return(
        <div className="flex flex-col gap-y-9 h-full w-full">
            <div className="h-80">
                <img src={course.image} alt={course.title} srcset="" 
                    className="h-full w-full object-cover rounded-md object-center"/>
            </div>
            <div className="h-fit w-3xl flex flex-col gap-y-10 items-center">
                <div className="flex flex-col gap-y-6 rounded-2xl border border-slate-200  shadow-xl shadow-gray-300 py-6 px-8 m-5 ">
                    <h1 className="text-2xl font-bold text-slate-700">
                        What You'll Learn</h1> <hr className="text-slate-400 w-2xl" />
                    <span className="text-left text- leading-6.5 text-slate-700">
                        {course.description}
                    </span>
                </div>
                <div className="flex flex-col gap-y-6 rounded-2xl border border-slate-200  shadow-xl shadow-gray-300 py-6 px-8 m-5">
                    <h1 className="text-2xl font-bold text-slate-700">
                        Course Content</h1> <hr className="text-slate-400 w-2xl" />
                    <ul className="flex flex-col gap-y-2">
                        <li>Module 1: Programming Fundamentals & Logic</li>
                        <li>Module 2: Front-End Web Engineering</li>
                        <li>Module 3: Back-End Infrastructure & APIs</li>
                        <li>Module 4: Databases, Testing, & DevOps Deployment</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Course;