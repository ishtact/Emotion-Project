import React from 'react'
import Link from 'next/link'
import Button from './Button'
import { fugazexp } from '@/app/layout'
import Calender from './Calender'

export default function Dashboard() {
 
  const statuses = {
    num_day: 14,
    time_remaining:'13:14:26' ,
    date: (new Date()).toDateString()
  }

  const wordMapping ={
    num_day: 'Number of days',
    time_remaining: 'Time Remaining',
    date: 'Date'
  }

  const moods = {
    'Happy': '😀',
    'Sad': '😔',
    'Angry': '😡',
    'Exicited': '😎',
    'Tired': '😴'
  }
  
  return (
    <div className='flex flex-col flex-1'>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-3 sm:gap-0 mb-6 bg-indigo-900 p-6 rounded-2xl'>
        {Object.keys(statuses).map((status, statusIndex) => (
          <div key={statusIndex} className='flex flex-col items-start'>
            <div className='text-md font-bold'>{wordMapping[status]}</div>
            <div className={`${fugazexp.className} text-xl`}>{statuses[status]}</div>
          </div>
        ))}
      </div>
      <h4 className={`${fugazexp.className} text-2xl mb-4`}>How do you <span className='text-gradient'>feel</span> today?</h4>
        <div className='flex items-stretch flex-wrap gap-4 '>
            {Object.keys(moods).map((mood, moodIndex) => (
             <button className={`text-lg font-bold bg-neutral-900 p-4 rounded-2xl flex flex-col flex-1 items-center justify-center hover:bg-indigo-900`}
             type="button"
             key={moodIndex}
           >
                <p className={`${fugazexp.className} text-indigo-500`}>{mood}</p>
                <p className='text-5xl mt-2'>{moods[mood]}</p>
              </button>
            ))}
        </div>
        <Calender demo/>
    </div>
    
  )}


