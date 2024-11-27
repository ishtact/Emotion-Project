import React from 'react'
import { fugazexp } from '@/app/layout'

export default function Button(props) {
  const {text, dark, full} = props
    return (
    <button className={`${dark ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white outline-0 border-0' : 'text-white dark-600 outline outline-1 outline-pink-500'} 
    ${full ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white outline-0 border-0' : 'text-white dark-600 outline outline-1 outline-pink-500'} 
    overflow-hidden duration-200 opacity-80 hover:opacity-100 px-4 py-2 rounded-full`}>
        <p className={`${fugazexp.className} px-6 sm:px-10 whitespace-nowrap py-2 sm:-m-2`}>{text}</p>
    </button>
  )
}
