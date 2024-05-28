import React from 'react';
import motion from 'framer-motion';
import { ComputersCanvas } from './canvas';
import { styles } from '../styles';



const Hero: React.FC = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am <span className='text-[#915eff]'>Ali</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop Mobile and web based Applications. My specialization lies in making front end of web and mobile app. I primarily work on React and React native, with some experience in .net and flutter.</p>
        </div>
      </div>

      <ComputersCanvas/>
    </section>
  )
}

export default Hero