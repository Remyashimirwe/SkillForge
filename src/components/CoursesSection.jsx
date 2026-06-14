import { useState } from 'react';
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
            baseHeight: 'h-128.5',
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
            customHeight: 'h-136.5'
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
    const [searchInput, setSearchInput] = useState("")
    const filteredCourses = courseData.filter((course) => {
        return course.title.toLowerCase().includes(searchInput.toLowerCase())
    });

    function FilterCourses(e){
        e.preventDefault();
        console.log('button working..!');
        
    }

    return(
        <div className='bg-slate-400 flex flex-col w-full items-center py-8.5'>
            <div className='flex flex-col items-center w-full gap-y-12.5'>
                <div className='w-full flex  justify-center items-center'>
                        <div className='w-full flex justify-center items-center'>
                            <h1 className='text-3xl text-center font-bold'>Our Courses</h1>
                        </div>
                    <div className='flex px-10 w-full justify-end'>
                        <div 
                            className='flex items-center border-2 border-blue-600 rounded-2xl overflow-hidden  bg-white/70 h-14'>

                            <button
                            type='submit' onClick={FilterCourses}
                            className='flex items-center text-white cursor-pointer hover:bg-blue-800 transition-colors duration-500 bg-blue-600 h-full px-5'>
                                <Search className='h-6 w-6 stroke-3' />
                            </button>
                            <input 
                            type="text" placeholder='Search a course...'
                            value={searchInput}
                            onChange={(e)=> setSearchInput(e.target.value)}
                            className='px-4 w-full h-full text-gray-700 focus:outline-none'
                            />
                        </div>
                    </div>
                    
                </div>
                <div className='flex flex-wrap gap-x-18 gap-y-15  justify-center w-full'>
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                        <div 
                            key={course.id}
                            className={`bg-slate-900 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-7rem)]
                             ${course.baseHeight} ${course.customHeight} rounded-3xl flex flex-col gap-y-2 justify-between items-center 
                            hover:border-2 hover:scale-110 transition duration-1000 border-blue-900 `}> 

                            <div className='flex gap-y-2.5 flex-col'>

                                <img src={course.image} alt={course.category} 
                                className='rounded-t-2xl'/>
                            
                                <h1 className='font-bold px-4.5 py-2.5 text-white text-xl'>
                                    {course.title}
                                </h1>

                                <span className='px-4.5 text-green-300/60 font-mono font-semibold leading-2.5'>
                                    {course.category}
                                </span>
                            
                                
                                <div 
                                    className='px-4.5 py-6.5'>
                                    <p className='text-sm font-medium text-slate-200'>
                                    {course.description}</p>
                                </div>
                            </div> 
                            
                            <div 
                                className='my-auto flex gap-x-6.5'>
                                    
                                <button 
                                    className='bg-blue-600 cursor-pointer font-serif  text-slate-300 rounded-2xl w-32.5 h-10.5
                                        flex items-center justify-center gap-2
                                        hover:bg-gray-700 hover:text-gray-300  transition-colors duration-500'>
                                    View More <View />
                                </button>
                                <button 
                                    className='bg-blue-600 cursor-pointer  text-slate-300 rounded-2xl w-34.5 h-10.5
                                        flex items-center justify-center gap-2
                                        hover:bg-gray-700 hover:text-gray-300 transition-colors duration-500'>
                                    APPLY NOW 
                                </button>
                            </div>    
                        </div>   
                    ))
                ) : (
                    <div className='text-white text-xl py-10'>
                        no Courses match with "{searchInput}"
                        </div>
                )
                }
                    
                </div>
            </div>
        </div>
    )
}