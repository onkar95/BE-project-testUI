import React, { useEffect, useState } from 'react'
import { questions } from '../data/questions'
import Timer from './Timer';
import './test.css'
import TestInfo from './TestInfo';
const Test = () => {
    const [answersTemp, setAnswersTemp] = useState(new Array(questions.length).fill(null));
    const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
    const [currentQuestion, setcurrentQuestion] = useState(1)


    useEffect(() => {
        const savedAnswers = localStorage.getItem('answers')
        if (savedAnswers) {
            const ans = savedAnswers.split(',')
            setAnswersTemp(ans)
        }
    }, [])


    const handelSaveTemp = (index, value) => {
        const newAnswers = [...answersTemp];
        newAnswers[index] = value;
        setAnswersTemp(newAnswers);
    }
    const handelSave = () => {
        const newAnswers = [...answersTemp];
        setAnswers(newAnswers);
        localStorage.setItem('answers', newAnswers);
    }
    const handelNext = (index) => {
        if (currentQuestion < questions.length) setcurrentQuestion(currentQuestion + 1)
    }

    const handelPrev = () => {
        if (currentQuestion >= 2) setcurrentQuestion(currentQuestion - 1)
    }

    return (
        <div className='test_container' >
            <div className='questions_div' >


                {questions.slice(currentQuestion - 1, currentQuestion).map((question, index) => (
                    <div key={index} className="question" >
                        <div key={index} className="options" >
                            <h3>{question.quest}</h3>
                            <label>
                                <input
                                    type="radio"
                                    name={`ans${index}`}
                                    value={question.A}
                                    checked={answersTemp[currentQuestion - 1] === question.A}
                                    onChange={() => handelSaveTemp(currentQuestion - 1, question.A)}
                                />
                                {question.A}
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name={`ans${index}`}
                                    value={question.B}
                                    checked={answersTemp[currentQuestion - 1] === question.B}
                                    onChange={() => handelSaveTemp(currentQuestion - 1, question.B)}
                                />
                                {question.B}
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name={`ans${index}`}
                                    value={question.C}
                                    checked={answersTemp[currentQuestion - 1] === question.C}
                                    onChange={() => handelSaveTemp(currentQuestion - 1, question.C)}
                                />
                                {question.C}
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name={`ans${index}`}
                                    value={question.D}
                                    checked={answersTemp[currentQuestion - 1] === question.D}
                                    onChange={() => handelSaveTemp(currentQuestion - 1, question.D)}
                                />
                                {question.D}
                            </label>
                        </div>
                        <div>
                            <button disabled={currentQuestion - 1 === 0} onClick={() => handelPrev()}>prev</button>
                            <button disabled={answersTemp[currentQuestion - 1] === null} onClick={() => handelSave(currentQuestion - 1)}> save </button>
                            <button disabled={currentQuestion === questions.length} onClick={() => handelNext(index)}>  next</button>
                        </div>
                    </div>
                ))}
                <button onClick={() => console.log(answers)}>Submit</button>
            </div>
            <div className='test_right'>
                <TestInfo questions={questions}
                    currentQuestion={currentQuestion}
                    setcurrentQuestion={setcurrentQuestion} />
                <Timer />
            </div>
        </div>
    )
}

export default Test


