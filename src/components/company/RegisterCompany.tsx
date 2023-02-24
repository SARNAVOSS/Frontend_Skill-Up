import React, { useContext } from 'react'
import { useState } from 'react'
import { registerCompany } from '../../api'
import { Basecontext } from '../../Context/Basecontext'
import { useNavigate } from 'react-router-dom'

const RegisterCompany = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [company,setCompany] = useState('')
  const [password,setPassword] = useState('')
  const [phone,setPhone] = useState('')

  const {state, dispatch} = useContext(Basecontext)
  const navigate = useNavigate()

  const handleCompanyRegister = async (e) => {
    e.preventDefault()
    const res = await registerCompany(name,email,company,password,phone)
    console.log(res)

    if(!res.error){
      alert(res.message)
      navigate('/company/login')
      // dispatch({type:"SET_COMPANY_ACCESS_TOKEN",payload:res.token}) 
    }else {
      console.log(res)
    }
  }
  
  return (
 <div className='h-[90%] flex justify-center items-center bg-bg-primary'>
        <form className='flex flex-col justify-center items-center w-[35%] gap-4'
        onSubmit={handleCompanyRegister}
        >
          <div className='bg-gradient-to-r from-green-400 to-yellow-300 w-[80%] p-[2px] rounded-xl'>
            <input type="text" placeholder="Name" className='bg-bg-primary-1 py-3 px-5 rounded-xl w-full text-lg focus:outline-none'
            onChange={(e)=> setName(e.target.value)}
             />
          </div>
          <div className='bg-gradient-to-r from-green-400 to-yellow-300 w-[80%] p-[2px] rounded-xl'>
            <input type="text" placeholder="Email" className='bg-bg-primary-1 py-3 px-5 rounded-xl w-full text-lg focus:outline-none'
            onChange={(e)=> setEmail(e.target.value)}
             />
          </div>
          <div className='bg-gradient-to-r from-green-400 to-yellow-300 w-[80%] p-[2px] rounded-xl'>
            <input type="text" placeholder="Company" className='bg-bg-primary-1 py-3 px-5 rounded-xl w-full text-lg focus:outline-none'
            onChange={(e)=> setCompany(e.target.value)}
             />
          </div>
          <div className='bg-gradient-to-r from-green-400 to-yellow-300 w-[80%] p-[2px] rounded-xl'>
            <input type="password" placeholder="Password" className='bg-bg-primary-1 py-3 px-5 rounded-xl w-full text-lg focus:outline-none'
            onChange={(e)=> setPassword(e.target.value)}
             />
          </div>
          <div className='bg-gradient-to-r from-green-400 to-yellow-300 w-[80%] p-[2px] rounded-xl'>
            <input type="text" placeholder="Phone" className='bg-bg-primary-1 py-3 px-5 rounded-xl w-full text-lg focus:outline-none'
            onChange={(e)=> setPhone(e.target.value)}
             />
          </div>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 px-10 rounded-lg text-lg font-semibold text-gray-900 w-[70%]'
          >SignUp</button>
        </form>
  </div>
  )
}

export default RegisterCompany