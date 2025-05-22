import React from 'react'
import {assets} from '../../assets/assets'
const Hero = () => {
  return (
    <div className='felx flex-col items-center justify-center w-full md:pt-36 pt-20
    px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold
       text-gray-800 max-w-3xl mx-auto'>Hi Friends Apne future ki Education ko with Entertainment Padhe vo 
        bhi<span className='text-blue-600'> 
          Humare dwara apke liye bnaye gaye courses se </span><img src={assets.sketch} alt="sketch"
        className='md:block hidden absolute -bottom-7 right-0' /></h1>
         
         {/* for medium screen */}
        <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>humare pass ache ache tutor hai apke liye to aap humare sath pdh sakte hai aram se , acha content , achi videos 
          filhal k liye ye to dummy hai but for sure hum apko apke future mein help jrur karenge 
        </p>
        
         {/* for small screen */}
        <p className='md-hiiden text-gray-500 max-w-s mx-auto '>hum apke carrer mein apki help krenge ache acge tutor k sath </p>
    </div>
  )
}

export default Hero
