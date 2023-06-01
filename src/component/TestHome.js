import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { TestContest } from '../context/TestContext'
import Instructions from './Instructions'
import './testhome.css'

const TestHome = () => {
    const navigate = useNavigate()
    const { seconds, setSeconds, testStatus, setTestStatus } = useContext(TestContest)
    const handelclick = () => {
        setTestStatus("started")
        localStorage.setItem("testStatus", "started")
        setSeconds(15 * 60)
        localStorage.setItem('remainingTime', 15 * 60)
        navigate('/test')
    }
    console.log(testStatus)
    if (testStatus === "started") {
        return navigate('/test')
    } else if (testStatus === "submitted") {
        return navigate('/thank-you')
    }
    return (
        <div>

            <Instructions />
            <button onClick={() => handelclick()} className='button'>Take Test</button>

        </div>
    )
}

export default TestHome