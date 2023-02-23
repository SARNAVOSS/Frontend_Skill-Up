import React, { useState } from 'react'
import {useContext } from 'react';
import { Basecontext } from '../Context/Basecontext';
import { useNavigate } from 'react-router-dom';

const ConnectWallet = () => {

    const navigate = useNavigate()

    const {state,dispatch} = useContext(Basecontext)
    const [address, setAddress] = useState(null)

    const Wallet = async() => {
        if(window.ethereum){
            console.log("detected");

            try {

                const acc = await window.ethereum.request({
                    method:"eth_requestAccounts",
                })
                dispatch({type:"SET_ADDRESS",payload:acc})
                dispatch({type:"SET_WALLET_CONNECTED",payload:false})
                navigate("/dashboard")
            } catch (err) {
                alert(err)
            }
        }else {
            console.log("no wallet detected")
        }
    }

  return (
    <div className='w-full h-full flex gap-4 flex-col justify-center items-center py-5 px-5 text-lg font-semibold'>
        <button className='py-5 px-10 border border-black rounded-md bg-gradient-to-r from-yellow-400 to-orange-500' onClick={Wallet}>Connnect Wallet</button>
        {
            address!== null ? (<div>{address}</div>) : "0xaaaaaaa........ccccccc"
        }
    </div>
  )
}

export default ConnectWallet