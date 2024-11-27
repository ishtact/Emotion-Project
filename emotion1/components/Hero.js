import React from 'react'
import { fugazexp } from '@/app/layout'
import Button from './Button'
import Calender from './Calender'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='py-10 sm:py-10 md:py-20 flex flex-col gap-2 sm:gap-4'>
      <h1 className={`text-4xl sm:text-5xl font-bold ${fugazexp.className}`}><span className='text-gradient'>Emotions</span> help you track your <span className='text-gradient'>daily</span> mood!</h1>
      <p className='text-lg flex flex-col'>Create your mood recored & track your daily mood every day of the year.</p>
      <div className='grid grid-cols-2 gap-4 justify-start w-fit'>
        <Link href="/dashboard"><Button text='Login' dark /></Link>
        <Link href="/signup"><Button text='Sign Up' /></Link>
      </div>
      <div>
        <Calender/>
      </div>
    </div>
  )
}
