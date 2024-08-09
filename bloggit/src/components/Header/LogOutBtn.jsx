import React from 'react'
import {useDispatch} from 'react-redux';
import authService from '../../appwrite/auth';
import {logout} from '../../store/authSlice'

const LogOutBtn = () => { 

    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }

  return (
    <button className='bg-green-100 px-6 py-2'>Logout</button>
  )
}

export default LogOutBtn