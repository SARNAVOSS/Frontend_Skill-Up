import React, { useContext, useState } from 'react'
import profileImg from '../../../assets/images/phoenix.jpg'
import {Education, Skill} from '../../../components'
import { Basecontext } from '../../../Context/Basecontext'

const UserProfile = () => {

    // const [toggle, setToggle] = useState("content")
    const {state,dispatch} = useContext(Basecontext)
    
  return (
    <div className='h-[90%] w-full flex justify-start items-center bg-bg-primary gap-4 flex-col py-5 px-5'>
        <div className='w-40 h-40 rounded-full'>
            <img src={profileImg} alt="ProfileImg" className='w-full h-full rounded-full object-cover'/>
        </div>
        <div className='w-full flex px-5 py-10 gap-6'>
            <div className='flex-2'>
                <ul className='text-lg text-white font-serif flex flex-col justify-start gap-4'>
                    <li className='cursor-pointer py-2 px-5'
                    onClick={() => dispatch({type:"SET_PROFILE_TAB_OPTION",payload:"Education"})}
                    >Education</li>
                    <li className='cursor-pointer py-2 px-5'
                    onClick={() => dispatch({type:"SET_PROFILE_TAB_OPTION",payload:"Skills"})}
                    >Skills</li>
                    <li className='cursor-pointer py-2 px-5'
                    onClick={(e) => e.class}
                    >Projects</li>
                </ul>
            </div>
            <div className='flex-1'>
                {
                    state.profileTab === "Education" ? <Education /> : <Skill />
                }
            </div>
        </div>
    </div>
  )
}

export default UserProfile