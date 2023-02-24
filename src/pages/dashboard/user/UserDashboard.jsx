import React from 'react'
import UserCertificate from '../../../components/user/UserCertificate'

const UserDashboard = () => {
  return (
    <div className='h-[90%] w-full flex justify-start items-center bg-bg-primary gap-4 flex-col py-5 px-5'>
        <div className='w-full flex justify-center'>
            <input type="text" placeholder='Search Certificates' className='py-3 px-5 rounded-lg text-white bg-bg-primary-1 font-serif text-lg w-[35%] focus:outline-none'/>
        </div>
        <div className='w-full flex flex-wrap justify-start gap-4 pt-10'>
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