import React, { useEffect } from 'react'
import {CertificateItem} from '../../../components'
import { getCertificates } from '../../../api/company/company.certificates'
import { useState } from 'react'

const CompanyDashboard = () => {

  const [certificates, setCertificates] = useState(null)

  useEffect(() => {

    const fetchCertificates = async () => {
      const res = await getCertificates()

      if(!res.data.error){
        setCertificates(res.data.data.message)
      }else {
        alert(res.data.message)
      }

    }

    fetchCertificates()
    
  },[])

  const handleCreateCertificate = () => {
    console.log("create certificate")
  }
  
  return (
    <div className='h-[90%] w-full flex justify-start items-center bg-bg-primary gap-4 flex-col py-5 px-5'>
        {/* <div className='w-full flex justify-between items-center px-5'>
            <input type="text" placeholder='Search Certificates' className='py-3 px-5 rounded-lg text-white bg-bg-primary-1 font-serif text-lg w-[45%] focus:outline-none'/>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 px-10 rounded-lg text-lg font-semibold text-gray-900'
            onClick={handleSkillTest}
            >Skill Test</button>
        </div> */}
        <div className='w-full flex flex-wrap justify-start gap-4 pt-10 overflow-y-auto'>
            {
                certificates === null ? (<>
                <div className='text-3xl text-gray-600 font-serif'>No certificates Present</div>
                <div className='w-full'>
                 <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 px-10 rounded-lg text-lg font-semibold text-gray-900 w-[20%]'
                 onClick={handleCreateCertificate}
                  >Create</button>
                </div>
                </>
                ) : certificates.map((certificate,index) => (
                    <CertificateItem certificate={certificate} key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default CompanyDashboard