import React from 'react'
import UserCertificate from '../../../components/user/UserCertificate'
import { useNavigate } from 'react-router-dom'

const UserDashboard = () => {

  const navigate = useNavigate()

  const handleSkillTest = () => {
    navigate('/user/skilltest')
  }
  
  return (
    <div className='h-[90%] w-full flex justify-start items-center bg-bg-primary gap-4 flex-col py-5 px-5'>
        <div className='w-full flex justify-between items-center px-5'>
            <input type="text" placeholder='Search Certificates' className='py-3 px-5 rounded-lg text-white bg-bg-primary-1 font-serif text-lg w-[45%] focus:outline-none'/>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 px-10 rounded-lg text-lg font-semibold text-gray-900'
            onClick={handleSkillTest}
            >Skill Test</button>
        </div>
        <div className='w-full flex flex-wrap justify-start gap-4 pt-10 overflow-y-auto'>
            <UserCertificate />
            <UserCertificate />
            <UserCertificate />
            <UserCertificate />
            <UserCertificate />
            <UserCertificate />
            <UserCertificate />
            <UserCertificate />
            <UserCertificate />
            <UserCertificate />
            <UserCertificate />
        </div>
    </div>
  )
}

export default UserDashboard