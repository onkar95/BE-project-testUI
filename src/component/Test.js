import React, { useEffect, useState } from 'react'
import { questions } from '../data/questions'
import Timer from './Timer';
import './test.css'
import TestInfo from './TestInfo';
import VideoStreaming from './VideoStreaming';
import { useNavigate } from 'react-router-dom';
const Test = () => {
    const [answersTemp, setAnswersTemp] = useState(new Array(questions.length).fill(null));
    const [answers, setAnswers] = useState();
    const [currentQuestion, setcurrentQuestion] = useState()
    let [seconds, setSeconds] = useState(60 * 60);

    const navigate = useNavigate()

    useEffect(() => {
        const savedAnswers = localStorage.getItem('answers')
        const lastActiveQuestion = localStorage.getItem('currentQuestion')
        if (lastActiveQuestion) {
            setcurrentQuestion(Number(lastActiveQuestion))
        } else {
            setcurrentQuestion(1)
        }
        if (savedAnswers) {
            const ans = savedAnswers.split(',')
            setAnswersTemp(ans)
            setAnswers(ans)
        }
    }, [])

    useEffect(() => {
        if (currentQuestion !== undefined) localStorage.setItem('currentQuestion', currentQuestion)
    }, [currentQuestion])


    const handelSaveTemp = (index, value) => {
        const newAnswers = [...answersTemp];
        newAnswers[index] = value;
        setAnswersTemp(newAnswers);
    }
    const handelSave = () => {
        const newAnswers = [...answersTemp];
        let finalAns = []
        newAnswers.forEach(element => {
            if (element !== '' && element !== null) {
                finalAns.push(element)
            } else {
                finalAns.push("null")
            }
        });
        localStorage.setItem('answers', finalAns);
        setAnswers(finalAns);
    }
    const handelNext = (index) => {
        if (currentQuestion < questions.length) setcurrentQuestion(currentQuestion + 1)
    }

    const handelPrev = () => {
        if (currentQuestion >= 2) setcurrentQuestion(currentQuestion - 1)
    }

    const handelSubmit = () => {
        const c = window.confirm('are you sure')
        console.log(c)
        if (c && seconds / 60 <= 45) {
            handelSave()
            navigate('/thank-you')
        } else {
            alert("you must attend the test for at least 15 minutes")
        }
    }

    return (
        <div className='test_container' >
            <div className='questions_div' >
                {
                    questions &&
                    currentQuestion !== undefined &&
                    questions?.slice(currentQuestion - 1, currentQuestion).map((question, index) => (
                        <div key={index} className="question" >

                            <h3> {currentQuestion}. {question.quest}?</h3>
                            <div key={index} className="options" >
                                <label>
                                    <input
                                        type="radio"
                                        name={`ans${index}`}
                                        value={question.A}
                                        checked={answersTemp[currentQuestion - 1] === "A"}
                                        onChange={() => handelSaveTemp(currentQuestion - 1, "A")}
                                    />
                                    {question.A}
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name={`ans${index}`}
                                        value={question.B}
                                        checked={answersTemp[currentQuestion - 1] === "B"}
                                        onChange={() => handelSaveTemp(currentQuestion - 1, "B")}
                                    />
                                    {question.B}
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name={`ans${index}`}
                                        value={question.C}
                                        checked={answersTemp[currentQuestion - 1] === "C"}
                                        onChange={() => handelSaveTemp(currentQuestion - 1, "C")}
                                    />
                                    {question.C}
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name={`ans${index}`}
                                        value={question.D}
                                        checked={answersTemp[currentQuestion - 1] === "D"}
                                        onChange={() => handelSaveTemp(currentQuestion - 1, "D")}
                                    />
                                    {question.D}
                                </label>
                            </div>
                        </div>
                    ))}
                <div className='question_buttons' >
                    <div>
                        <button className='btn prev_butn' disabled={currentQuestion - 1 === 0} onClick={() => handelPrev()}>prev</button>
                        <button className='btn save_butn' disabled={answersTemp[currentQuestion - 1] === 'null'} onClick={() => handelSave(currentQuestion - 1)}> save </button>
                        <button className='btn next_butn' disabled={currentQuestion === questions.length} onClick={() => handelNext()}>  next</button>
                    </div>
                    {/* <div>
                        <button className='btn submit_btn' onClick={() => console.log(answers)}>Submit</button>
                    </div> */}
                </div>
            </div>
            <div className='test_right'>
                {/* <VideoStreaming /> */}
                <Timer seconds={seconds} setSeconds={setSeconds} />
                <TestInfo
                    answers={answers}
                    currentQuestion={currentQuestion}
                    setcurrentQuestion={setcurrentQuestion} />
                <button onClick={() => handelSubmit()} className='submit_button'>Submit </button>
            </div>
        </div>
    )
}

export default Test


