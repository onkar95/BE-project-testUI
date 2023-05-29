import React from 'react'
import { useContext } from 'react'
import { TestContest } from '../context/TestContext'
import './thankyou.css'
import { useNavigate } from 'react-router-dom'

const ThankYou = () => {
    const { testStatus, setTestStatus } = useContext(TestContest)
    const navigate = useNavigate()

    if (testStatus === 'started') {
        return navigate('/test')
    }
    return (
        <div className="thank-you-container">
            <h2 className="thank-you-title">Thank You for Submitting the Test</h2>
            <p className="thank-you-message">Results will be updated on your dashboard soon.</p>
        </div>)
}

export default ThankYou