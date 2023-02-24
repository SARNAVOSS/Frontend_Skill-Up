import React from 'react'
import { useNavigate } from 'react-router-dom'

const Modal = (props) => {

    const navigate = useNavigate()
    
  return (
    <div className='rounded-lg py-3 px-8 flex flex-col gap-2 justify-center items-baseline fixed top-20 right-10 bg-gray-700'>
        <button className='text-white text-md font-serif ' onClick={() => {
            if(localStorage.getItem('client') === 'user'){navigate('/user/dashboard'),props.setToggle(false)}
            else if(localStorage.getItem('client') === 'company'){navigate('/company/dashboard');props.setToggle(false)}
        }}>Dashboard</button>
        <button className='text-white text-md font-serif ' onClick={() => {
            if(localStorage.getItem('client') === 'user'){navigate('/user/profile');props.setToggle(false)}
            else if(localStorage.getItem('client') === 'company'){navigate('/company/profile');props.setToggle(false)}
        }}>Profile</button>
        <button className='text-white text-md font-serif ' onClick={() => {
            props.setToggle(false)
            localStorage.removeItem('accessToken')
            localStorage.removeItem('client')
            navigate('/')
        }}>Logout</button>
    </div>
  )
}

export default Modal