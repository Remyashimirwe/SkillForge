import { useEffect, useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";

function Course() {
    const location = useLocation();
    const navigate = useNavigate();

    const course = location.state?.Courses;

    if (!course){
        return null;
    }

    const storageKey = `course_spots_${course?.id}`;

    const [spotsCount, setSpotsCount] = useState(() => {
        const data = localStorage.getItem(storageKey);
        if(data) {
            return JSON.parse(data);
        }
        return course
    });

    useEffect(() => {
        if(spotsCount){
            localStorage.setItem(storageKey, JSON.stringify(spotsCount));
        }
    },[spotsCount, storageKey])

    function spotCountHandler ()  { 
        
        setSpotsCount(prev => {
            if(!prev) return prev;
            return { 
                ...prev,
                spotsLeft: prev.spotsLeft - 1
            };
            
        });

    };

    
    return(
        <div className="flex flex-col gap-y-9 min-h-screen w-full">
            <div className="relative h-64 md:h-80 w-full ">
                <img src={course.image} alt={course.title} 
                    className="h-full w-full object-cover rounded-md object-center"/>
                <span className="absolute bottom-10 md:right-36 right-10 text-xl md:text-4xl text-slate-900 bg-white rounded-xl px-3 py-2 font-bold">{course.title}</span>
            </div>
            <div className="flex flex-wrap md:flex-row gap-x-20 gap-y-9 justify-center ">
                <div className="flex flex-col gap-y-10 w-sm md:w-3xl">
                    <div className="flex flex-col gap-y-6 rounded-2xl border border-slate-200 shadow-xl dark:shadow-gray-600/50 shadow-gray-300 py-6 px-8 ">
                        <h1 className="text-2xl font-bold dark:text-slate-300 text-slate-700">
                            What You'll Learn</h1> 
                            <hr className="border-slate-400 w-full" />
                        <span className="text-left leading-relaxed dark:text-slate-300 text-slate-600">
                            {course.description}
                        </span>
                    </div>
                <div className="flex flex-col gap-y-6 rounded-2xl border border-slate-200 shadow-xl dark:shadow-gray-600/50 shadow-gray-300 py-6 px-8 ">
                    <h1 className="text-2xl font-bold dark:text-slate-300 text-slate-700">
                        Course Content</h1> 
                        <hr className="border-slate-400 w-full" />
                    <ul className="">
                        {course.lessons ? (
                            course.lessons.map((lesson) => (
                                <li className="list-decimal" key={lesson.id}>
                                    <span className="font-medium dark:text-slate-300"> {lesson.title}</span> 
                                </li>
                            ))
                        ) : (
                            <p className="text-amber-600 font-bold text-center">NO LESSONS FOUND</p>
                        )}  
                    </ul>
                </div>
                </div>
                <div className="w-sm md:w-1/4 h-fit flex flex-col gap-y-7 p-5 rounded-2xl border-2 border-green-300  shadow-xl dark:shadow-gray-600/50 shadow-gray-300 mb-3">
                    <div className="flex flex-col gap-y-8">
                        <div className="flex items-center justify-between">
                            <span className="text-left text-3xl font-bold leading-6.5 dark:text-slate-300 text-slate-700">
                                {course.price}   
                            </span>
                            <span className="bg-orange-300/40 font-medium rounded-md text-sm dark:bg-orange-500/40 text-amber-500 px-2.5 py-1">{spotsCount.spotsLeft} spots left</span>
                        </div>
                        
                    </div>
                    <div className=" flex flex-col gap-y-4">
                        <div className="flex items-center justify-between">
                            <span className="font-semibold dark:text-slate-300 text-slate-700">Start Date</span>
                            <span className="bg-blue-200/20 px-2 p-1.5 rounded font-semibold text-sm dark:text-emerald-300 text-emerald-500 ">Monday, 6 July 2026</span>
                        </div>
                        <hr className="border-slate-300 w-full"/>
                        <div className="flex items-center justify-between">
                            <span className="font-semibold dark:text-slate-300 text-slate-700">Enrolled</span>
                            <span className="bg-blue-200/20 px-2 p-1.5 rounded font-semibold text-sm dark:text-emerald-300 text-emerald-500 ">165</span>
                        </div>
                        <hr className="border-slate-300 w-full"/>
                        <div className="flex items-center justify-between">
                            <span className="font-semibold dark:text-slate-300 text-slate-700">Skill Level</span>
                            <span className="bg-blue-200/20 px-2 p-1.5 rounded font-semibold text-sm dark:text-emerald-300 text-emerald-500 ">
                                {course.level}
                            </span>
                        </div>
                        <hr className="border-slate-300 w-full"/>
                        <button
                            disabled={spotsCount.spotsLeft <= 0}
                            onClick={spotCountHandler}
                            className={`w-full h-11 text-slate-50 font-medium rounded-full transition-colors duration-600
                                ${spotsCount.spotsLeft > 0 ? 
                                    'cursor-pointer hover:bg-emerald-700 bg-emerald-600' : 
                                    'bg-red-400  cursor-not-allowed '
                                }
                            `}>
                                {spotsCount.spotsLeft > 0 ? 'BOOK' : 'FULL'}
                        </button>
                    </div>
                    <div className="w-full">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Course;