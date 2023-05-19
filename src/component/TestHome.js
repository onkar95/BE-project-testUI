import React from 'react'
import { useNavigate } from 'react-router-dom'
import Instructions from './Instructions'
import './testhome.css'

const TestHome = () => {
    const navigate = useNavigate()
    const handelclick = () => {
        navigate('/test')
    }

    return (
        <div>
            <Instructions />
            <button onClick={handelclick} className='button'>Take Test</button>
        </div>
    )
}

export default TestHome