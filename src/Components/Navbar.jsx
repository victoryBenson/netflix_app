import React from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

export const Navbar = () => {
  const {user, logOut} = UserAuth()
  // console.log(user)

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='flex justify-between p-4 items-center z-[100] w-full fixed '>
      <Link to ="/">
        <h1 className='text-red-600 text-4xl cursor-pointer capitalize font-bold'>
          netflix
        </h1>
      </Link>
      {/* if logged in then display Account link and logout instead of signIn */}
      {user?.email? 
      <div className='flex text-stone-100 items-center justify-center'>
        <Link to = '/account'>
           <button className='pr-4'>
            Account
           </button>
        </Link>
          <button onClick={handleLogout} className='px-5 bg-red-600 py-2 rounded cursor-pointer text-white'>
            Logout
          </button>
      </div>
      :
      <div className='flex text-stone-100 items-center justify-center'>
          <Link to = '/login'>
             <button className='pr-4'>
              Sign In
             </button>
          </Link>
          <Link to='/signup'>
            <button className='px-6 bg-red-600 py-2 rounded cursor-pointer text-white'>
              Sign Up
            </button>
          </Link>
        </div>
        }
    </div>
  )
}
