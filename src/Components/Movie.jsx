import React, {useState} from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'

export const Movie = ({item}) => {
    const [like, setlike] = useState(false)

  return (
    <>
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path} `} alt={item?.name} />
            <div className='absolute w-full h-full left-0 top-0 opacity-0 hover:opacity-100 hover:bg-black/80 text-white '>
                <p className='whitespace-pre text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                    {item?.title}
                </p>
                <p>
                    {like? <FaHeart className='absolute top-4 left-4 text-stone-200'/> : <FaRegHeart className='absolute top-4 left-4 text-stone-200'/>}
                </p>
            </div>
        </div>
    </>
  )
}
