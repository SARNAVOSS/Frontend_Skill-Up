import React,{useContext, useState} from 'react'
import { Basecontext } from '../../Context/Basecontext'
import ConnectWallet from '../ConnectWallet'
import { useNavigate } from 'react-router-dom'
import Loader from '../../utils/Loader'


import {registerUser} from '../../api/'

const RegisterUser = () => {

  const [connectWallet, setConnectWallet] = useState(false)
  const {state, dispatch} = useContext(Basecontext)
  const navigate = useNavigate()

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [phone,setPhone] = useState('')
  const [address,setAddress] = useState('')
  const [loading,setLoading] = useState(false)

  const Wallet = async() => {
        if(window.ethereum){
            console.log("detected");

            try {

                const acc = await window.ethereum.request({
                    method:"eth_requestAccounts",
                })
                dispatch({type:"SET_WALLET_ADDRESS",payload:acc})
                setAddress(acc)
                // dispatch({type:"SET_WALLET_CONNECTED",payload:false})
            } catch (err) {
                alert(err)
            }
        }else {
            console.log("no wallet detected")
        }
  }

  const handleRegister = async(e) => {
    e.preventDefault()
    // setConnectWallet(!connectWallet)
    setLoading(!loading)
    // console.log("connecting wallet")
    await Wallet();
    // console.log(state.walletAddress)
    const res = await registerUser(name,email,username,password,phone,address);
    if(!res.data.error){
      alert(res.data.message)
      // dispatch({type:"SET_USER_ACCESS_TOKEN",payload:res.token}) 
      setLoading(!loading)
      navigate('/login/userlogin')
    }else {
      alert(res.data.message)
    }
    console.log(res)
    
  }

  
  return (
 <div className='h-[90%] flex justify-center items-center bg-bg-primary'>
        <form className='flex flex-col justify-center items-center w-[35%] gap-4' onSubmit={handleRegister}>
          <div className='bg-gradient-to-r from-green-400 to-yellow-300 w-[80%] p-[2px] rounded-xl'>
            <input type="text" placeholder="Name" className='bg-bg-primary-1 py-3 px-5 rounded-xl w-full text-lg focus:outline-none font-semibold text-gray-300' 
            onChange={(e) => {
              setName(e.target.value)
            }}
             />
          </div>
          <div className='bg-gradient-to-r from-green-400 to-yellow-300 w-[80%] p-[2px] rounded-xl'>
            <input type="text" placeholder="Email" className='bg-bg-primary-1 py-3 px-5 rounded-xl w-full text-lg focus:outline-none font-semibold text-gray-300' 
            onChange={(e) => {
              setEmail(e.target.value)
            }}
             />
          </div>
          <div className='bg-gradient-to-r from-green-400 to-yellow-300 w-[80%] p-[2px] rounded-xl'>
            <input type="text" placeholder="Username" className='bg-bg-primary-1 py-3 px-5 rounded-xl w-full text-lg focus:outline-none font-semibold text-gray-300' 
            onChange={(e) => {
              setUsername(e.target.value)
            }}
             />
          </div>
          <div className='bg-gradient-to-r from-green-400 to-yellow-300 w-[80%] p-[2px] rounded-xl'>
            <input type="password" placeholder="Password" className='bg-bg-primary-1 py-3 px-5 rounded-xl w-full text-lg focus:outline-none font-semibold text-gray-300' 
            onChange={(e) => {
              setPassword(e.target.value)
            }}
             />
          </div>
          <div className='bg-gradient-to-r from-green-400 to-yellow-300 w-[80%] p-[2px] rounded-xl'>
            <input type="text" placeholder="Phone" className='bg-bg-primary-1 py-3 px-5 rounded-xl w-full text-lg focus:outline-none font-semibold text-gray-300' 
            onChange={(e) => {
              setPhone(e.target.value)
            }}
             />
          </div>
          {
            loading? <Loader /> : (
          <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 px-10 rounded-lg text-lg font-semibold text-gray-900 w-[70%]'
          >SignUp</button>
            )
          }
        </form>
 </div>
  )
}

export default RegisterUser