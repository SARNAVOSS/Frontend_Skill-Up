import React from 'react'
import { useNavigate } from 'react-router-dom'
import Cross from '../../assets/icons/Cross'

const Block1 = (props) => {

    const navigate = useNavigate()
    const handlecertificateCreation = (e) => {
        e.preventDefault()
        props.setToggle(false)
        navigate('/company/questions')
    }
    
  return (
    <div className='fixed top-10 left-30 rounded-lg w-[70%] py-2 px-2 bg-gray-700'>
        <div className='w-full flex justify-end cursor-pointer' onClick={() => props.setToggle(false)}>
            <Cross width={30} height={30}/> 
        </div>
        <form className='flex flex-col justify-center items-center w-full gap-2'>
            <div className='text-white font-semibold text-md w-[40%]'>
                <p>Name</p>
                <input className=' rounded-md w-full py-2 px-5 focus:outline-none text-white text-md font-semibold bg-gray-800' type="text" />
            </div>
            <div className='text-white font-semibold text-md w-[40%]'>
                <p>Description</p>
                <input className=' rounded-md w-full py-2 px-5 focus:outline-none text-white text-md font-semibold bg-gray-800' type="text" />
            </div>
            <div className='text-white font-semibold text-md w-[40%]'>
                <p>Price</p>
                <input className=' rounded-md w-full py-2 px-5 focus:outline-none text-white text-md font-semibold bg-gray-800' type="text" />
            </div>
            <div className='text-white font-semibold text-md w-[40%]'>
                <p>Overall Difficulty</p>
                <input className=' rounded-md w-full py-2 px-5 focus:outline-none text-white text-md font-semibold bg-gray-800' type="text" />
            </div>
            <div className='text-white font-semibold text-md w-[40%]'>
                <p>Number of questions</p>
                <input className=' rounded-md w-full py-2 px-5 focus:outline-none text-white text-md font-semibold bg-gray-800' type="text" />
            </div>
            {/* <div className='text-white font-semibold text-md w-[40%]'>
                <p>Make Public</p>
                <input className='rounded-md w-full py-2 px-5 focus:outline-none text-white text-md font-semibold bg-gray-800' type="radio" />
            </div> */}
            <div className='text-white font-semibold text-md w-[40%]'>
                <p>Category</p>
                <input className='rounded-md w-full py-2 px-5 focus:outline-none text-white text-md font-semibold bg-gray-800' type="text" />
            </div>
            <button onClick={handlecertificateCreation}
            className='text-lg text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 px-10 rounded-lg font-semibold w-[2  0%]'
            >
                Create
            </button>
        </form>
    </div>
  )
}

export default Block1