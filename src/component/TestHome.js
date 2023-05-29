import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { TestContest } from '../context/TestContext'
import Instructions from './Instructions'
import './testhome.css'

const TestHome = () => {
    const navigate = useNavigate()
    const { testStatus, setTestStatus } = useContext(TestContest)
    const handelclick = () => {
        setTestStatus("started")
        localStorage.setItem("testStatus", "started")
        navigate('/test')
    }
    console.log(testStatus)
    if (testStatus === "started") {
        return navigate('/test')
    }
    return (
        <div>

            <Instructions />
            <button onClick={handelclick} className='button'>Take Test</button>

        </div>
    )
}

export default TestHome