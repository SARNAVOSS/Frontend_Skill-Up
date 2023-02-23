import React from 'react'

const Landing = () => {
  return (
    <div className='h-[90%] flex justify-center items-center bg-bg-primary'>
      <div className='w-full flex justify-center'>
        <div className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[3px] rounded-xl w-[45%]'>
          <input type="text"
          className='py-3 px-5 rounded-xl w-full text-lg focus:outline-none ' 
          placeholder='Search User'
          />
        </div>
      </div>
    </div>
  )
}

export default Landing