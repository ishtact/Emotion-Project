import { fugazexp } from '@/app/layout'
import React from 'react'
import Button from './Button'

export default function Login() {
  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4'>
      <h3 className={`${fugazexp.className} text-2xl`}>Sign in to your account</h3>
      <p>You're one step closer to a better life</p>
      <div className='gap-6 flex flex-col w-full max-w-[400px] mt-8'>
        <input type="text" placeholder="Email" className="w-full py-3 px-5 border rounded-full text-sm bg-neutral-900 border-neutral-700 focus:bg-neutral-800 focus:outline-indigo-500 focus:border-indigo-500 focus-visible:outline-0" />
        <input type="password" placeholder="Password" className="w-full py-3 px-5 border rounded-full text-sm bg-neutral-900 border-neutral-700 focus:bg-neutral-800 focus:outline-indigo-500 focus:border-indigo-500 focus-visible:outline-0" />
        <Button text='Login' full/>
        <div className='flex items-center justify-center gap-2 text-sm'>Dont have an account? <span className='text-gradient cursor-pointer'>Sign Up</span></div>
      </div>
    </div>
  )
}
