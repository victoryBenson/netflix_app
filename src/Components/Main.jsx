import React, { useEffect, useState } from 'react'
import request  from '../Request'
import axios from 'axios'

export const Main = () => {
    const [movies, setMovies] = useState([])
     
    //refresh the page and select a random movie at a time
    const movie = movies[Math.floor(Math.random() * movies.length)]

    // get request from requests folder
    useEffect(()=>{
        axios.get(request.requestPopular).then((response)=>{
            setMovies(response.data.results)
        })
    },[])

    console.log(movie)

    const truncateString = (str, num) => {
        // (str?.length > num) ? str.slice(0, num) + '...' : str 
        if (str?.length > num) {
            return str.slice(0,num)+'...'
        } else {
            return str
        }
    };

  return (
    <div className='w-full h-[550px]  text-white'>
        <div className='w-full h-full '>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold '>{movie?.title}</h1>
                <div className='my-4'>
                    <button className='rounded border text-black border-stone-200 py-2 px-5 bg-stone-200'>Play</button>
                    <button className='rounded border text-white border-stone-200 py-2 px-5 ml-2'>Watch Later</button>
                </div>
                <p className='text-sm text-stone-400'>Released: {movie?.release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-stone-300'>{truncateString(movie?.overview, 150)}</p>
            </div>
        </div>
    </div>
  )
}
