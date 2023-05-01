
import React from 'react';
import { questions } from '../data/questions';
import './timer.css'

const TestInfo = ({ questions, currentQuestion, setcurrentQuestion }) => {
    return (
        <div className="question-list">
            {questions.map((question, index) => (
                <button
                    key={index}
                    className={`question-button ${index + 1 === currentQuestion ? 'active' : ''}`}
                    onClick={() => setcurrentQuestion(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default TestInfo;
