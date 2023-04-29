import React, { useState } from 'react'
import { questions } from '../data/questions'

const Test = () => {
    const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
    const [currentQuestion, setcurrentQuestion] = useState(1)
    const [currentQuestionAnswer, setCurrentQuestionAnswer] = useState('')

    const handleAnswerChange = (value) => {
        setCurrentQuestionAnswer(value)
    };

    const handelSaveAndNext = (index) => {
        console.log(currentQuestionAnswer)
        const newAnswers = [...answers];
        newAnswers[index] = currentQuestionAnswer;
        setAnswers(newAnswers);
        console.log(answers)
        setCurrentQuestionAnswer('')
        if (currentQuestion < questions.length) setcurrentQuestion(currentQuestion + 1)
    }
    const handelPrev = () => {
        if (currentQuestion >= 2) setcurrentQuestion(currentQuestion - 1)
    }

    return (
        <div>
            {questions.slice(currentQuestion - 1, currentQuestion).map((question, index) => (
                <div key={index}>
                    <div key={index}>
                        <h3>{question.quest}</h3>
                        <label>
                            <input
                                type="radio"
                                name={`ans${index}`}
                                value={question.A}
                                checked={answers[index] === question.A}
                                onChange={() => handleAnswerChange(index, question.A)}
                            />
                            {question.A}
                        </label>
                        <label>
                            <input
                                type="radio"
                                name={`ans${index}`}
                                value={question.B}
                                checked={answers[index] === question.B}
                                onChange={() => handleAnswerChange(index, question.B)}
                            />
                            {question.B}
                        </label>
                        <label>
                            <input
                                type="radio"
                                name={`ans${index}`}
                                value={question.C}
                                checked={answers[index] === question.C}
                                onChange={() => handleAnswerChange(index, question.C)}
                            />
                            {question.C}
                        </label>
                        <label>
                            <input
                                type="radio"
                                name={`ans${index}`}
                                value={question.D}
                                checked={answers[index] === question.D}
                                onChange={() => handleAnswerChange(index, question.D)}
                            />
                            {question.D}
                        </label>
                    </div>
                    <div>
                        <button onClick={() => handelPrev()}>prev</button>
                        <button onClick={() => handelSaveAndNext(index)}> save & next</button>
                    </div>
                </div>
            ))}
            <button onClick={() => console.log(answers)}>Submit</button>

        </div>
    )
}

export default Test


