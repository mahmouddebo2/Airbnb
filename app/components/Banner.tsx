import Hero from '@/public/pexels-photo-208213.jpeg'
import Image from 'next/image'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl-h-[500px]'>
        <Image
        src={Hero}
        alt='Hero Image'
        className='object-cover object-left opacity-85'
        fill/>
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-sm  md:text-[30px] font-bold text-[#5131af] mb-1 md:mb-3'>Not sure where to go? <span className='text-[#ff5a5f]'>Perfect.</span> </p>
            <button className='text-purple-500 bg-white px-5 md:px-10 py-2  md:py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
              I am flexible
            </button>
        </div>
    </div>
  )
}

export default Banner