
import React, { useEffect } from 'react';
import { questions } from '../data/questions';
import './test.css'

const TestInfo = ({ currentQuestion, setcurrentQuestion, answers, setAnswers }) => {
    // const handelSetQuestion = (val) => {
    //     if (val > visited || visited < currentQuestion) return alert('save the current question')
    //     setcurrentQuestion(val)
    // }
    // useEffect(() => {
    //     const savedAnswers = localStorage.getItem('answers')
    //     if (savedAnswers) {
    //         const ans = savedAnswers.split(',')
    //         // console.log(ans)
    //     }
    // }, [answers])
    console.log(answers)

    return (
        <div className="question-list">
            {questions.map((question, index) => (
                <button
                    key={index}
                    className={`question-button 
                    ${index + 1 === currentQuestion ? 'active' : answers && answers[index] !== 'null' ? 'visited' : ''}`}
                    onClick={() => setcurrentQuestion(index + 1)}
                >
                    {index + 1 <= 9 ? `0${index + 1}` : index + 1}
                </button>
            ))}
        </div>
    );
};

export default TestInfo;
