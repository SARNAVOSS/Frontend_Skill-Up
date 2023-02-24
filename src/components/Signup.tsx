import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()

    const Logincompany = () => {
        navigate('/signup/companysignup')
    }

    const Loginuser = () => {
        navigate('/signup/usersignup')
    }
    
  return (
    <div className='h-[90%] flex justify-center items-center bg-bg-primary flex-col gap-4'>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 px-10 rounded-lg text-lg font-semibold text-gray-900' 
        onClick={Logincompany}
        >Company Signup</button>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 px-10 rounded-lg text-lg font-semibold text-gray-900' 
        onClick={Loginuser}
        >User Signup</button>
    </div>
  )
}

export default Signup