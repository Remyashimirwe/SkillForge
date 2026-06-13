import Campus from '../assets/image1.jpg';
import student from '../assets/image2.jfif';
import library from '../assets/image3.jfif'
export default function HeroSection (){
    return (
        <section className='flex flex-col items-center'>
            <div className='relative h-80 md:h-112.5 w-full overflow-hidden rounded-full'>
                <img src={Campus} alt="UoK Kigali Campus" 
                className='h-full w-full object-cover object-center' />

                <h1 className=
                    'absolute inset-0 h-fit w-fit m-auto bg-slate-200/70 font-semibold text-4xl py-2 px-4 text-pink-900'>
                    University of Kigali Online Learning Portal</h1>
            </div>
            <div 
            className='text-white w-4xl border border-slate-500/25 rounded-xl px-4 py-8 my-4 
                    flex flex-col gap-3 justify-center'>
                <div className=''>
                    <p className='text-slate-900'>
                    The University of Kigali is one of the leading private higher education institutions of learning in Rwanda. UoK is a fully accredited and chartered University by the Government of the Republic of Rwanda. The University of Kigali has three campuses: the main campus, located at Prester House in Kacyiru, near Kigali Heights, the Remera campus located at the KN3 road, opposite the Grand Legacy Hotel, and the Musanze campus in the Musanze District, Northern Province, housed in the Prestigious RSSB Building.
                </p>
                </div>
                
                <div className='w-full bg-gray-900'>
                    <div className='flex'>
                        <div className='bg-red-700 flex flex-col w-1/2 shrink-0'>
                            <div className='flex flex-col gap-y-4 px-6 pt-6 pb-6'>
                                <h1 className='font-bold text-lg'>Our vision</h1>
                                <span className='text-left leading-relaxed'>
                                    Our vision is to be a pole of radiance and excellence nationally and internationally, with quality education, research and provision of innovative service to the community.
                                </span>
                            </div>
                            <div className='w-full min-h-0'>
                                <img src={library} alt="UoK Students"
                                className=' object-cover object-center h-full w-full'/>
                            </div>
                        </div>

                        <div className='flex flex-col w-1/2'>
                            <div 
                                className='flex flex-col gap-y-4 px-6 pt-6 pb-6'>
                                <h1 className='font-bold text-right text-lg'>Our Mission and Motto</h1>
                                <span className='text-right leading-relaxed'>
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
                        <div className='flex flex-col items-center gap-y-7'>
                            <h1 className='font-bold text-4xl'>Our Impact</h1>
                        
                            <div className='w-full flex flex-col items-center gap-y-12 text-center'>
                                <div className='flex justify-center gap-x-55'>
                                    <div className='flex flex-col justify-center items-center gap-y-2'>
                                        <span className='font-bold text-3xl'>8K+</span>
                                        <p 
                                        className='text-lg text-gray-300 max-w-37.5'>
                                            Students as of 2025</p>
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <span className='font-bold text-3xl'>9K+</span>
                                        <p 
                                        className='text-lg text-gray-300 max-w-37.5'>
                                            Alumni</p>
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <span className='font-bold text-3xl'>30+</span>
                                        <p 
                                        className='text-lg text-gray-300 max-w-37.5'>
                                            Nationalities</p>
                                    </div>
                                </div>

                                <div className='py-6 flex items-center justify-center gap-x-45.5'>
                                    <div className='flex flex-col gap-y-2 items-center'>
                                        <span className='font-bold text-3xl'>Over 700+</span>
                                        <p 
                                        className='text-md text-gray-300'>
                                            International Students</p>
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <span className='font-bold text-3xl'>28</span>
                                        <p 
                                        className='text-lg text-gray-300 max-w-37.5'>
                                            Academic Programmes</p>
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <span className='font-bold text-3xl'>34</span>
                                        <p 
                                        className='text-lg text-gray-300 max-w-37.5'>
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