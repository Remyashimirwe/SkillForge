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
            summary: 'Master coding fundamentals and full-stack development to build responsive web apps and launch your tech career.',
            description: 'Dive into the world of coding and learn to build the digital world from scratch. This course takes you from programming fundamentals to full-stack application development. You will master core languages like Python, JavaScript, and SQL, understand version control with Git, and learn how to design, test, and deploy responsive web apps. By the end of this course, you will have a portfolio of real-world projects and the problem-solving mindset required to launch a career as a software engineer.  ',
            price: '$45',
            duration: '6 months',
            image:  software,
        },
        {
            id: 2,
            title: 'Photography',
            category: 'Visual Arts',
            summary: 'Step off manual mode and master exposure, composition, and lighting to capture breathtaking professional photos.',
            description: 'Unlock the full potential of your camera and learn to see the world like a professional photographer. This course strips away the confusion of manual mode, teaching you how to master the "exposure triangle"—aperture, shutter speed, and ISO—to perfectly control light. You will explore creative composition, portraiture, landscape photography, and basic digital photo editing. Whether you are using a DSLR, mirrorless camera, or a smartphone, you will finish this course with the technical prowess and artistic eye to capture stunning images.',
            price: '$100',
            duration: '8 months',
            image:  photography
        },
        {
            id: 3,
            title: 'Computer Literacy',
            category: 'Foundational Tech',
            summary: 'Gain essential digital skills, from file management to office software, and navigate technology with confidence.',
            description: 'Conquer the digital divide and gain confidence using modern technology. Designed specifically for absolute beginners, this course covers the absolute essentials of operating a computer. You will learn how to navigate Windows and macOS environments, manage files securely, master internet browsing and email etiquette, and utilize essential office software like Microsoft Word and Excel. This is your stress-free gateway to navigating the modern digital workforce and staying connected with the world.',
            price: '$40',
            duration: '6 months',
            image:  literacy
        },
        {
            id: 4,
            title: 'Music and Audio Production',
            category: 'Audio Engineering',
            summary: 'Learn to record, mix, and master your own tracks or podcasts using professional audio engineering tools.',
            description: 'Transform your musical ideas into polished, radio-ready tracks. This course introduces you to the exciting world of audio engineering and digital music creation. Working inside a Digital Audio Workstation (DAW), you will learn the fundamentals of MIDI sequencing, recording live instruments, vocal production, and the intricate arts of mixing and mastering (using EQ, compression, and effects). Perfect for aspiring music producers, podcasters, and sound designers looking to achieve professional-grade audio.',
            image:  music
        },
        {
            id: 5,
            title: 'Graphic Design',
            category: 'Visual Communication',
            summary: 'Learn typography, color theory, and Adobe tools to create stunning logos, branding, and marketing visuals.',
            description: 'Learn the art of visual storytelling and turn your creative ideas into high-impact designs. This course explores the core principles of typography, color theory, branding, and layout design. Through hands-on projects, you will gain mastery over industry-standard tools like Adobe Photoshop, Illustrator, and InDesign. Whether you want to design logos, social media graphics, marketing materials, or user interfaces, this course will help you build a professional design portfolio from the ground up.' ,
            image:  graphic
        },
        {
            id: 6,
            title: 'Videography',
            category: 'Media Production',
            summary: 'Move beyond simple recording and discover how to capture cinematic stories that move audiences. This course bridges the gap between technical camera operation and creative filmmaking. You will learn the mechanics of exposure, frame rates, and camera movement, alongside the art of lighting, audio capture, and narrative pacing. From mobile filmmaking to professional camera rigs and post-production editing, you will gain the skills needed to produce high-quality videos for YouTube, documentaries, commercial marketing, or indie film.',
            description: 'Unlock the full potential of your camera and learn to see the world like a professional photographer. This course strips away the confusion of manual mode, teaching you how to master the "exposure triangle"—aperture, shutter speed, and ISO—to perfectly control light. You will explore creative composition, portraiture, landscape photography, and basic digital photo editing. Whether you are using a DSLR, mirrorless camera, or a smartphone, you will finish this course with the technical prowess and artistic eye to capture stunning images.',
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