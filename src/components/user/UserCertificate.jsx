import React from 'react'
import nftimg from '../../assets/images/nft-test.png'
import ShowCertificate from '../ShowCertificate'

const UserCertificate = (props) => {

  const handleToggle = async() => {
    // const res = await 
    props.setToggle(true)
  }
  
  
  return (
    <div className='flex flex-col justify-center items-center gap-4 py-8 px-3 rounded-lg border-2 border-gray-800 shadow-mda bg-card-primary-1 w-48 h-w-48 cursor-pointer'
    onClick={handleToggle}
    >
        <div>
            <img src={nftimg} alt="NFT IMAGE" className='rounded-lg object-cover'/>
        </div>
        <p className='text-lg text-white font-serif'>Some Text</p>
    </div>
  )
}

export default UserCertificate