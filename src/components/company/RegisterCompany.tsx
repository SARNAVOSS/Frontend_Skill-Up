import React from 'react'

const RegisterCompany = () => {
  return (
 <div className='h-[90%] flex justify-center items-center bg-bg-primary'>
        <form className='flex flex-col justify-center items-center w-[35%] gap-4'>
          <div className='bg-gradient-to-r from-green-400 to-yellow-300 w-[80%] p-[2px] rounded-xl'>
            <input type="text" placeholder="Name" className='bg-bg-primary-1 py-3 px-5 rounded-xl w-full text-lg focus:outline-none' />
          </div>
          <div className='bg-gradient-to-r from-green-400 to-yellow-300 w-[80%] p-[2px] rounded-xl'>
            <input type="text" placeholder="Email" className='bg-bg-primary-1 py-3 px-5 rounded-xl w-full text-lg focus:outline-none' />
          </div>
          <div className='bg-gradient-to-r from-green-400 to-yellow-300 w-[80%] p-[2px] rounded-xl'>
            <input type="text" placeholder="Username" className='bg-bg-primary-1 py-3 px-5 rounded-xl w-full text-lg focus:outline-none' />
          </div>
          <div className='bg-gradient-to-r from-green-400 to-yellow-300 w-[80%] p-[2px] rounded-xl'>
            <input type="password" placeholder="Password" className='bg-bg-primary-1 py-3 px-5 rounded-xl w-full text-lg focus:outline-none' />
          </div>
          <div className='bg-gradient-to-r from-green-400 to-yellow-300 w-[80%] p-[2px] rounded-xl'>
            <input type="text" placeholder="Phone" className='bg-bg-primary-1 py-3 px-5 rounded-xl w-full text-lg focus:outline-none' />
          </div>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 px-10 rounded-lg text-lg font-semibold text-gray-900 w-[70%]'
          >SignUp</button>
        </form>
  </div>
  )
}

export default RegisterCompany