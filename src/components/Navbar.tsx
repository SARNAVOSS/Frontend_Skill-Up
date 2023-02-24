import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Basecontext } from '../Context/Basecontext'

import profileImg from '../assets/images/phoenix.jpg'
import ConnectWallet from './ConnectWallet'
import Modal from './Modal'

const Navbar = () => {

    const navigate = useNavigate()
    const {state,dispatch} = useContext(Basecontext)
    const [toggle,setToggle] = useState(false)

    const Login = () => {
        navigate('/login')
    }

    const Signup = () => {
        navigate('/signup')
    }
    
  return (
    <div className='flex justify-between items-center bg-bg-primary sticky top-0 left-0 py-5 px-10 h-[10%]'>
        {
            toggle ? <Modal setToggle={setToggle}/> : null
        }
        <div className='text-white text-xl font-bold cursor-pointer '
        onClick={
            () => navigate('/')
        }
        >Skill Up</div>
        {
            localStorage.getItem("accessToken") === null ? (
                <div className='flex justify-center items-center gap-4'>
                    <button className='text-md text-white font-bold cursor-pointer'
                    onClick={Login}
                    >Login</button>
                    <button className='text-md text-white font-bold cursor-pointer'
                    onClick={Signup}
                    >SignUp</button>
                </div>
            ) : (
                <div className='rounded-full w-12 h-12'>
                    <img src={profileImg} alt="Profile Imaage" className='cursor-pointer w-full h-full object-cover rounded-[9999px]' onClick={() => setToggle(!toggle)}/>
                </div>
            )
        }
    </div>
  )
}

export default Navbar