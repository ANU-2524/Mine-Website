import React from 'react'
import { FlipWords } from './FlipWords'

const HeroText = () => {
  return (
    <div className='z-10 mt-10 text-center md:text-left rounded-3xl bg-transparent'>
      <div className='flex-col hidden md:flex'>
        <h1 className='text-3xl lg:text-4xl font-medium'>Hy, I'm Anu </h1>
        <div className='flex flex-col items-start'>
            <p className='text-4xl lg:text-5xl font-medium text-neutral-300 leading-tight'
            >A Developer <br/> Dedicated to Crafting</p>
            <div className="-ml-1"><FlipWords words={["Secure" , "Modern" , "Scalable"]} className='font-black text-white text-6xl lg:text-8xl py-1'/></div>
            <p className='text-3xl lg:text-4xl font-medium text-neutral-300'>Web Solutions</p>
        </div>
      </div>
      <div className='flex flex-col space-y-2 md:hidden px-4 mb-20'>
        <p className='text-2xl font-medium'>Hello, I’m Anu ...</p>
        
        <div className='flex flex-col items-center'>
            <p className='text-lg font-medium text-neutral-300 text-center leading-tight'
            >A Developer Dedicated to Crafting</p>
            <div><FlipWords words={["Secure" , "Modern" , "Scalable"]} className='font-black text-white text-4xl sm:text-5xl py-2'/></div>
            <p className='text-xl font-medium text-neutral-300'>Web Solutions</p>
        </div>
      </div>
    </div>
  )
}

export default HeroText
