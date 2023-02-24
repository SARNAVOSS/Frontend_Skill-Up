import React from 'react'
import Cross from '../assets/icons/Cross'
import nftimg from '../assets/images/nft-test.png'

const ShowCertificate = (props) => {
  return (
    <div className='fixed top-5 left-96 bg-bg-primary-1 rounded-lg flex flex-col justify-center items-center w-96 py-5 px-3'>
        <div onClick={() => {
            props.setToggle(false)
            console.log("asdfgsdfg")
        }}
        className='flex justify-end w-full cursor-pointer'
        >
            <Cross width={28} height = {28} />
        </div>
        <div className='w-48 h-48 rounded-lg'>
            {/* <img src={props.certificate_image} alt="" /> */}
            <img src={nftimg} alt="" className='rounded-lg object-cover' />
        </div>
        {/* <p>{props.description}</p> */}  
        <div className='text-white text-lg font-serif'>Lorem ipsum dolor sit amet consectetur, aoluptatum enim debitis corrupti!</div>
        <div className='flex w-full justify-between items-center py-2 px-5'>
            {/* <p>{props.company}</p>
            <p>{props.price}</p> */}
            <p className='text-white text-lg font-semibold'>Company NAME</p>
            <p className='text-white text-lg font-semibold'>0.02345867btc</p>
        </div>
    </div>
  )
}

export default ShowCertificate