import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext';

export const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, signUp } = UserAuth()
 
  // navigate to home page after the login is completed
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(email, password)
      navigate('/')
    } 
    catch (error) {
      console.log(error)
    }
  };
  return (
    <>
       <div className='w-full h-screen'>
          <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/b85863b0-0609-4dba-8fe8-d0370b25b9ee/8869853b-f228-4a41-8f56-e028e440c1af/NG-en-20230731-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
          <div className='fixed h-screen w-full top-0 left-0 right-0 bg-black/60'></div>
          <div className='w-full fixed px-4 py-24 z-50'>
            <div className='max-w-[450px] h-auto rounded mx-auto bg-black/75 text-stone-200'>
              <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='font-bold text-3xl'>
                  Sign up
                </h1>
                  <form onSubmit={handleSubmit} className='flex flex-col w-full py-4'>
                    <input
                      onChange={(e) => setEmail(e.target.value)} 
                      className='my-2 p-3 bg-stone-800 rounded' 
                      type="email" 
                      autoComplete='email' 
                      placeholder='Email' 
                    />
                    <input
                      onChange={(e) => setPassword(e.target.value)} 
                      className='my-2 p-3 bg-stone-800 rounded' 
                      type="password" 
                      placeholder='Password' 
                      autoComplete='current-passward'/>
                    <button className='bg-[#e50914] py-3 my-5 rounded'>
                      Sign Up
                    </button>
                    <div className='flex justify-between items-center text-sm text-stone-500'>
                      <p>
                        <input className='mr-2' type="checkbox"/>
                          Remember me
                      </p>
                      <p>
                        Need help?
                      </p>
                    </div>
                    <p className='py-8 text-sm font-bold'>
                      <span className='text-stone-500'>
                        Already subscribed to Netflix?
                      </span>{" "}
                      <Link to ='/login'>Sign In</Link>  
                    </p>
                  </form>
              </div>
            </div>
          </div>
       </div>
    </>
  );
}
