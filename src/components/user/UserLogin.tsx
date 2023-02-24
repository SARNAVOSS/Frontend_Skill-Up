import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../api'
import { Basecontext } from '../../Context/Basecontext'

const UserLogin = () => {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')

  const {state,dispatch} = useContext(Basecontext)

  const navigate = useNavigate()

  const handleLoginUser = async(e) => {
    e.preventDefault()
    
    const res = await loginUser(username,email,password)

    if(!res.error){
      dispatch({type:"SET_USER_ACCESS_TOKEN",payload:res.token})
      alert(res.message)
      navigate('/dashboard')
    }else {
      console.log(res)
    }
  }
  
  return (
    <div className='h-[90%] flex justify-center items-center bg-bg-primary flex-col gap-4'>
      <div className='flex gap-4 justify-around items-center w-full'>
        <form action="" className='flex flex-col justify-center items-center w-[35%] gap-4'
        onSubmit={handleLoginUser}
        >
          <div className='bg-gradient-to-r from-green-400 to-yellow-300 w-[80%] p-[2px] rounded-xl'>
            <input type="text" placeholder="Username" className='bg-bg-primary-1 py-3 px-5 rounded-xl w-full text-lg text-white focus:outline-none'
            onChange={(e) => setUsername(e.target.value)}
             />
          </div>
          <div className='bg-gradient-to-r from-green-400 to-yellow-300 w-[80%] p-[2px] rounded-xl'>
            <input type="text" placeholder="Email" className='bg-bg-primary-1 py-3 px-5 rounded-xl w-full text-lg text-white focus:outline-none'
            onChange={(e) => setEmail(e.target.value)}
             />
          </div>
          <div className='bg-gradient-to-r from-green-400 to-yellow-300 w-[80%] p-[2px] rounded-xl'>
            <input type="password" placeholder="Password" className='bg-bg-primary-1 py-3 px-5 rounded-xl w-full text-lg text-white focus:outline-none'
            onChange={(e) => setPassword(e.target.value)}
             />
          </div>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 px-10 rounded-lg text-lg font-semibold text-gray-900 w-[70%]'
          >Login</button>
        </form>

         <div>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 px-10 rounded-lg text-lg font-semibold text-gray-900'>Sign In with LinkedIn</button>
         </div>
      </div>
    </div>
  )
}

export default UserLogin