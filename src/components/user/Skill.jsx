import React from 'react'

const Skill = () => {

    const handleSkillEdit = () => {}
    
  return (
    <div className='flex flex-col justify-start items-center px-5'>
        <div className='text-lg text-white'>Skill 1</div>
        <div className='text-lg text-white'>Skill 2</div>
        <div className='text-lg text-white'>Skill 3</div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 px-10 rounded-lg text-lg font-semibold text-gray-900 fontse'
        onClick={handleSkillEdit}
        >Edit / Add Skills</button>
    </div>
  )
}

export default Skill