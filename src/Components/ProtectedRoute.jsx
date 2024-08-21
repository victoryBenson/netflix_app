import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

export const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()
  // {(!user)?  <Navigate to= '/'/> : children }
    {
      if(!user){
        return <Navigate to ='/' />
      }else{
        return children
      }
    }

}
