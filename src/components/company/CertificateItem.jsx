import React from 'react'


const CertificateItem = (props) => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 py-8 px-5 rounded-lg border-2 border-gray-800 shadow-mda bg-card-primary-1 w-56 h-w-56 cursor-pointer'>
      <div>
        <img src={props.image} alt="Certification Image"  className=''/>
      </div>
      <p className='text-lg text-white font-serif'>{props.name}</p>
      <p className='text-lg text-white font-serif'>{props.description}</p>
    </div>
  )
}

export default CertificateItem