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
            <div className='text-white w-4xl border border-slate-500/25 rounded-md px-4 py-5 my-4 flex flex-col gap-3 justify-center'>
                <div className=''>
                    <p className='text-slate-900'>
                    The University of Kigali is one of the leading private higher education institutions of learning in Rwanda. UoK is a fully accredited and chartered University by the Government of the Republic of Rwanda. The University of Kigali has three campuses: the main campus, located at Prester House in Kacyiru, near Kigali Heights, the Remera campus located at the KN3 road, opposite the Grand Legacy Hotel, and the Musanze campus in the Musanze District, Northern Province, housed in the Prestigious RSSB Building.
                </p>
                </div>
                <div className='relative bg-gray-900 flex'>
                    <div className='abolute bg-red-700 flex flex-col gap-y-5 w-96 px-5 py-7'>
                        <h1 className='font-bold'>Our vision</h1>
                        <span className=''>
                            Our vision is to be a pole of radiance and excellence nationally and internationally, with quality education, research and provision of innovative service to the community.
                        </span>
                        <img src={library} alt="UoK Students"
                            className='rounded-full'
                        />
                    </div>
                    <div className=' w-100 flex flex-col gap-y-5 px-5'>
                        <h1 className='font-semibold my-3 flex justify-end'>Our Mission and Motto</h1>
                        <span className='text-right'>
                            Our mission is to provide quality higher education programmes that match the labour market and development needs of Rwanda, the region and the world. Our motto is Labour for the Future.
                        </span>
                        <img src={student} alt="UoK Students"
                            className='rounded-full'
                        />
                    </div>
                    
                </div>
            </div>
            
            
        </section>
    )
}