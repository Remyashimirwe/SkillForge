import { useState } from 'react';
import Campus from '../assets/auca.jpg';
import student from '../assets/image2.jfif';
import library from '../assets/image3.jfif'
export default function HeroSection (){

    return (
        <section className='w-full flex flex-col items-center'>
            <div className='h-60 md:h-112.5 w-full overflow-hidden rounded-full'>
                <img src={Campus} alt="UoK Kigali Campus" 
                className='h-full w-full object-cover object-center dark:brightness-[0.75] dark:contrast-[1.05]' />

            </div>
            <div 
            className='border border-gray-400 rounded-xl max-w-100 md:max-w-4xl px-4 py-8 my-4  
                        flex flex-col gap-3 justify-center'>
                <div className='md:w-full text-xl md:text-fit'>
                    <p className='text-justify md:text-left '>
                    Adventist University Central Africa is one of the leading private higher education institutions of learning in Rwanda. AUCA is a fully accredited and chartered University by the Government of the Republic of Rwanda. AUCA has two campuses: the main campus, located at KG 230 St road, near RDB Building, and the Masoro campus is located at KG 162 Avenue, near Evangelical Restoration Church (Kwa Masasu).
                </p>
                </div>
                
                <div className=''>
                    <div className='flex'>
                        <div className=' flex flex-col w-1/2 shrink-0'>
                            <div className='flex flex-col md:h-54.5 gap-y-4 bg-indigo-400 dark:bg-indigo-700/50 px-4 md:px-6 pt-6 pb-6'>
                                <h1 className='font-bold text-lg'>Our vision</h1>
                                <span className='text-left md:leading-relaxed'>
                                    Our vision is to be a pole of radiance and excellence nationally and internationally, with quality education, research and provision of innovative service to the community.
                                </span>
                            </div>
                            <div className='w-full min-h-0'>
                                <img src={library} alt="UoK Students"
                                className=' object-cover object-center h-full w-full'/>
                            </div>
                        </div>

                        <div className='flex flex-col md:w-1/2'>
                            <div 
                                className='flex bg-red-300 dark:bg-pink-400/50 flex-col gap-y-4 w-48.5 md:w-full px-3 md:px-6 pt-6 pb-6'>
                                <h1 className='font-bold text-nowrap md:text-right'>Our Mission and Motto</h1>
                                <span className='text-right md:leading-relaxed'>
                                    Our mission is to provide quality higher education programmes that match the labour market and development needs of Rwanda, the region and the world. Our motto is Labour for the Future.
                                </span>
                            </div>
                            <div className='w-full min-h-0'>
                                <img src={student} alt="UoK Students"
                                className='object-center object-cover h-full w-full' />
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex flex-col items-center py-5'>
                        <div className='flex flex-col items-center gap-y-3 md:gap-y-7'>
                            <h1 className='font-bold text-4xl'>Our Impact</h1>
                        
                            <div className='w-full flex flex-col items-center gap-y-12 text-center'>
                                <div className='flex justify-center gap-x-10 md:gap-x-55'>
                                    <div className='flex flex-col justify-center items-center gap-y-2'>
                                        <span className='font-bold text-3xl'>8K+</span>
                                        <p 
                                        className='text-lg  max-w-37.5'>
                                            Students as of 2025</p>
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <span className='font-bold text-3xl'>9K+</span>
                                        <p 
                                        className='text-lg max-w-37.5'>
                                            Alumni</p>
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <span className='font-bold text-3xl'>30+</span>
                                        <p 
                                        className='text-lg  max-w-37.5'>
                                            Nationalities</p>
                                    </div>
                                </div>

                                <div className='py-6 flex items-center justify-center gap-x-12 md:gap-x-45.5'>
                                    <div className='flex flex-col gap-y-2 items-center'>
                                        <span className='font-bold text-3xl'>Over 700+</span>
                                        <p 
                                        className='text-md '>
                                            International Students</p>
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <span className='font-bold text-3xl'>28</span>
                                        <p 
                                        className='text-lg  max-w-37.5'>
                                            Academic Programmes</p>
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <span className='font-bold text-3xl'>34</span>
                                        <p 
                                        className='text-lg  max-w-37.5'>
                                            Award Won</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    
                </div>
                
            </div>
        </section>
    )
}