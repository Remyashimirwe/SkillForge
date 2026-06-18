import { useEffect, useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';

import graphic from '../assets/graphic.jpg';
import literacy from '../assets/literacy.png';
import music from '../assets/music.webp';
import photography from '../assets/photography.jpg';
import software from '../assets/software.webp';
import videography from '../assets/videography.jpeg';
import {ExternalLink as View, Search } from 'lucide-react'

export default function CoursesSection () {
    const courseData = [
        {
            id: 1,
            title: 'Software Development',
            category: 'Software Engineering',
            description: 'Master coding fundamentals and full-stack development to build responsive web apps and launch your tech career.',
            image:  software,
        },
        {
            id: 2,
            title: 'Photography',
            category: 'Visual Arts',
            description: 'Step off manual mode and master exposure, composition, and lighting to capture breathtaking professional photos.',
            image:  photography
        },
        {
            id: 3,
            title: 'Computer Literacy',
            category: 'Foundational Tech',
            description: 'Gain essential digital skills, from file management to office software, and navigate technology with confidence.',
            image:  literacy
        },
        {
            id: 4,
            title: 'Music and Audio Production',
            category: 'Audio Engineering',
            description: 'Learn to record, mix, and master your own tracks or podcasts using professional audio engineering tools.',
            image:  music,
        },
        {
            id: 5,
            title: 'Graphic Design',
            category: 'Visual Communication',
            description: 'Learn typography, color theory, and Adobe tools to create stunning logos, branding, and marketing visuals.',
            image:  graphic
        },
        {
            id: 6,
            title: 'Videography',
            category: 'Media Production',
            description: 'Master camera operation, lighting, and video editing to shoot and produce cinematic, high-quality stories.',
            image:  videography
    
        }
    ]
    const navigate = useNavigate();
    const handleViewMore = (course) => {
        const courseSlug = encodeURIComponent(course.title.toLowerCase())
        navigate (`/course/${courseSlug}`, { state: { courseData : course} })
    }
    const [searchInput, setSearchInput] = useState("");
    const filteredCourses = courseData.filter((course) => {
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
                <div className='flex flex-wrap gap-x-8 gap-y-10 w-full pl-5'>
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                        <div 
                            key={course.id}
                            className=" w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-7rem)]
                            bg-slate-900  border-2
                             h-fit rounded-3xl flex flex-col gap-y-2 justify-between items-center 
                            hover:border-2 hover:scale-110 transition duration-1000 "> 

                            <div className='flex gap-y-2.5 flex-col'>

                                <img src={course.image} alt={course.category} 
                                className='rounded-t-2xl'/>
                            
                                <h1 className='font-bold px-4.5 py-2.5 text-slate-200 text-xl'>
                                    {course.title}
                                </h1>

                                <span className='px-4.5 text-gray-400 font-mono font-semibold leading-2.5'>
                                    {course.category}
                                </span>
                            
                                
                                <div 
                                    className='flex flex-col gap-y-4 px-4.5 py-5.5'>
                                    <p className='text-sm font-medium text-white'>
                                    {course.description}</p>
                                    
                                    <div className='flex gap-5'>
                                        <button
                                            onClick={ () => handleViewMore(course)}
                                            className='text-white cursor-pointer font-serif rounded-2xl w-32.5 h-10.5 flex items-center justify-center gap-2
                                                bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-500'>
                                                View More <View />
                                        </button>
                                        <button 
                                            className='text-white cursor-pointer font-serif rounded-2xl w-32.5 h-10.5 flex items-center justify-center gap-2
                                                bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-500'>
                                            APPLY NOW 
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