
import React, { useEffect } from 'react';
import { questions } from '../data/questions';
import './test.css'
import './testinfo.css'

const TestInfo = ({ currentQuestion, setcurrentQuestion, answers }) => {

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
