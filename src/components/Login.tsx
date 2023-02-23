import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const Logincompany = () => {
        console.log("sadfgkgh")
        navigate('/login/companylogin')
    }

    const Loginuser = () => {
        navigate('/login/userlogin')
    }
    
  return (
    <div className='h-[90%] flex justify-center items-center bg-bg-primary flex-col gap-4'>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 px-10 rounded-lg text-lg font-semibold text-gray-900' 
        onClick={Logincompany}
        >Company Login</button>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 px-10 rounded-lg text-lg font-semibold text-gray-900' 
        onClick={Loginuser}
        >User Login</button>
    </div>
  )
}

export default Login