import React, { useState } from 'react'

const ConnetWallet = () => {

    const connectWallet = async() => {
        if(window.ethereum){
            console.log("detected");

            try {

                const acc = await window.ethereum.request({
                    method:"eth_requestAccounts",
                })
                setAddress(acc);
            } catch (err) {
                alert(err)
            }
        }else {
            console.log("no wallet detected")
        }
    }
    
    const [address, setAddress] = useState(null)
  return (
    <div className='w-full h-full flex gap-4 flex-col justify-center items-center py-5 px-5 text-lg font-semibold'>
        <button className='py-5 px-10 border border-black rounded-md bg-gradient-to-r from-yellow-400 to-orange-500' onClick={connectWallet}>Connnect Wallet</button>
        {
            address!== null ? (<div>{address}</div>) : "0xaaaaaaa........ccccccc"
        }
    </div>
  )
}

export default ConnetWallet