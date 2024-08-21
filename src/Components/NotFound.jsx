import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <div className='h-screen flex items-center justify-center font-bold  text-white'>
        <div className='flex flex-col items-center'>
            <span className='text-4xl py-5'>NotFound!</span>
            <Link to={"/"} className='underline'>Homepage</Link>
        </div>
    </div>
  )
}

export default NotFound