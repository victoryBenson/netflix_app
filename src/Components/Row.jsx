import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Movie } from './Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

export const Row = ({title, fetchURl, rowID}) => {
    const [movies, setmovies] = useState([])
    

    // get data when the page refreshes
    useEffect(() => {
      axios.get(fetchURl).then((response) => {
        setmovies(response.data.results)
      })

    }, [fetchURl])
    // console.log(movies)

    //set sliderLeft
    const slideLeft = () =>{
        let slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500
    }

    // set sliderRight
    const slideRight = () =>{
        let slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500
    }


  return (
    <div>
        <h1 className='text-stone-200 font-bold md:text-xl p-4'>{title}</h1>
        <div className='flex items-center relative group'>
            <MdChevronLeft 
                size={40} 
                onClick={slideLeft} 
                className='bg-stone-200 left-0 rounded-full absolute z-10 opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block'/>
            <div 
                id={'slider' + rowID} 
                className='h-full w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item, id) => (
                    <Movie key={id} item={item}/>
                ))}
            </div>
            <MdChevronRight 
                onClick={slideRight}
                size={40} 
                className='bg-stone-200 right-0 rounded-full absolute z-10 opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block'/>
        </div>
    </div>
  )
}
