import { useEffect, useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';

import {ExternalLink as View, Search } from 'lucide-react'
import { Courses } from '../data/courses';

export default function CoursesSection () {
    
    const navigate = useNavigate();
    const handleViewMore = (course) => {
        const courseSlug = encodeURIComponent(course.title.toLowerCase())
        navigate (`/courseDetails/${courseSlug}`, { state: { Courses : course} })
    }
    const [searchInput, setSearchInput] = useState("");
    const filteredCourses = Courses.filter((course) => {
        return course.title.toLowerCase().includes(searchInput.toLowerCase())
    });


    return(
        <div className=' flex flex-col w-full items-center transition-all duration-500 py-8.5'>
            <div className='flex flex-col items-center w-full gap-y-12.5'>
                <div className='w-full flex justify-center items-center'>
                        <div className='w-full flex justify-center items-center'>
                            <h1 className='text-3xl text-center font-bold'>Our Courses</h1>
                        </div> 
                    <div className='flex px-10 w-full justify-end'>
                        <div 
                            className='flex items-center border-2 border-indigo-600  rounded-2xl overflow-hidden h-14'>

                            <div
                                className='flex items-center  cursor-pointer bg-indigo-600/80 h-full px-5'>
                                <Search className='h-6 w-6 stroke-3' />  
                            </div>
                            <input 
                            type="text" placeholder='Search a course...'
                            value={searchInput}
                            onChange={(e)=> setSearchInput(e.target.value)}
                            className='px-4 w-full h-full bg-gray-600/40 focus:outline-none'
                            />
                        </div>
                    </div>
                    
                </div>
                <div className='flex flex-wrap gap-x-8 gap-y-10 w-full pr-5 pl-5 md:pr-0'>
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                        <div 
                            key={course.id}
                            className=" sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-7rem)]
                            bg-slate-900  
                             h-fit rounded-3xl flex flex-col gap-y-2 justify-between items-center 
                            hover:border-2 hover:scale-110 transition duration-1000 "> 

                            <div className='flex gap-y-2.5 flex-col'>

                                <img src={course.image} alt={course.category} 
                                className='rounded-t-2xl brightness-95'/>
                            
                                <h1 className='font-bold px-4.5 py-2.5 text-slate-200 text-xl'>
                                    {course.title}
                                </h1>

                                <span className='px-4.5 text-gray-400 font-mono font-semibold leading-2.5'>
                                    {course.category}
                                </span>
                            
                                
                                <div 
                                    className='flex flex-col gap-y-4 px-4.5 py-5.5'>
                                    <p className='text-sm font-medium text-white'>
                                    {course.summary}</p>
                                    
                                    <div className='flex gap-5'>
                                        <button
                                            onClick={ () => handleViewMore(course)}
                                            className='w-full text-white cursor-pointer font-serif rounded-2xl h-10.5 flex items-center justify-center gap-2
                                                bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-500'>
                                                View More <View />
                                        </button>
                                    </div>
                                </div>
                            </div> 
                                
                        </div>   
                    ))
                ) : (
                    <div className=' text-xl py-10'>
                        no Courses match with "{searchInput}"
                    </div>
                )
                }
                    
                </div>
            </div>
        </div>
    )
}