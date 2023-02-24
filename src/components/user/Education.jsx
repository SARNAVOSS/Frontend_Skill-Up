import React from 'react'

const Education = () => {

    const handleEdit = () => {}
    
  return (
    <div className='flex flex-col justify-start items-center px-5'>
        <div className='text-lg text-white'>Education 1</div>
        <div className='text-lg text-white'>Education 2</div>
        <div className='text-lg text-white'>Education 3</div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 px-10 rounded-lg text-lg font-semibold text-gray-900 fontse'
        onClick={handleEdit}
        >Edit</button>
    </div>
  )
}

export default Education