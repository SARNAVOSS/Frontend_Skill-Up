import React, { useState } from 'react'
import { questions } from '../data/questions';

const SkillTestBlock = (props) => {

    const [activeQuestion,setActiveQuestion] = useState(0);
    const [activeAnswer,setActiveAnswer] = useState('');
    const [score,setScore] = useState(0);
    const [correct,setCorrect] = useState(null);

    const arr = questions.questions
    // console.log(arr)

    const handleAnswerCheck = (e) => {
        const ans = e.target.innerText;

            console.log(ans);

        if(ans === questions.questions[activeQuestion].correctAnswer){
            console.log('correct')
            setScore((score) => score+1)
        }else{
            console.log('wrong')
        }
    }

  return (
    <div className='w-full flex justify-center items-center'>
        <div className='w-[60%] flex flex-col gap-4 justify-center items-center bg-bg-primary py-5 px-5'>
            <div className='text-lg text-white font-serif py-5'>
                {questions.topic}
            </div>
            <div className='text-center bg-gray-700 w-full py-3 font-semibold text-lg rounded-lg'>{questions.questions[activeQuestion].question}</div>
            <ul className='flex flex-col gap-2 justify-start w-full'>
                {
                    questions.questions[activeQuestion].choices.map((item,index) => (
                        <div className='flex gap-2 justify-start items-center text-md text-white w-full'>
                        {index + 1}.
                        <button key={index} className='text-inherit font-semibold hover:border-2 hover:border-purple-600 py-2 hover:rounded-lg hover:text-md px-3 w-full'
                        onClick={handleAnswerCheck}
                        > {item}</button>
                        </div>
                    ))
                }
            </ul>
            <div className='w-full flex justify-end items-center'>
                {
                    (activeQuestion) !== questions.totalQuestions-1 ? (
                    <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 px-10 rounded-lg text-lg font-semibold text-gray-900'
                    onClick={() => {
                        if(activeQuestion < questions.totalQuestions-1){
                            setActiveQuestion(activeQuestion +1)
                        }
                    }}
                    >Next</button>
                    ) : (
                <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 px-10 rounded-lg text-lg font-semibold text-gray-900'
                >Finish</button>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default SkillTestBlock