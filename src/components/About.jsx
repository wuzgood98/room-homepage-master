import React from 'react'

import aboutLight from '../assets/images/image-about-light.jpg'
import aboutDark from '../assets/images/image-about-dark.jpg'

const About = () => {
  return (
    <section className='w-full h-full lg:h-[42vmin] 2xl:h-[34.4vmin] flex flex-col xl:flex-row'>
      <div className="w-full h-full xl:max-w-[30rem] 2xl:max-w-[34rem]">
        <img src={aboutDark} alt="about dark image" className='w-full object-cover h-full' />
      </div>
      <div className="w-full h-full bg-white flex flex-col items-center justify-center px-9 py-9">
        <h3 className="font-bold text-black tracking-[0.2rem] uppercase mb-5 place-self-start lg:text-xl xl:text-2xl 2xl:text-3xl transition-all">about our furniture</h3>
        <p className="text-darkGray font-normal text-base lg:text-[1.0625rem] xl:text-[1.1rem] transition-all">
          Our multifunctional collection blends design and function to suit your individual taste.
          Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream space.
        </p>
      </div>
      <div className="w-full h-full xl:max-w-[30rem] 2xl:max-w-[34rem]">
        <img src={aboutLight} alt="about dark image" className='w-full object-cover h-full' />
      </div>
    </section>
  )
}

export default About