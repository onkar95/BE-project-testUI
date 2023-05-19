import React from 'react'
import './instructions.css'

const Instructions = () => {
    return (
        <div className="mca-test-instructions-container">
            <h2 className="mca-test-instructions-title">Online MCA Test Instructions</h2>
            <ol className="mca-test-instructions-list">
                <li className="mca-test-instructions-item">This test consists of multiple-choice questions.</li>
                <li className="mca-test-instructions-item">Read each question carefully and select the correct answer.</li>
                <li className="mca-test-instructions-item">You can only select one answer per question.</li>
                <li className="mca-test-instructions-item">Some questions may have a time limit. Make sure to answer them within the given time.</li>
                <li className="mca-test-instructions-item">Use the "Next" button to proceed to the next question.</li>
                <li className="mca-test-instructions-item">You can review your answers before submitting the test.</li>
                <li className="mca-test-instructions-item">After answering all the questions, click on the "Submit" button to finish the test.</li>
                <li className="mca-test-instructions-item">Once you have submitted the test, the answers cannot be changed.</li>
            </ol>
            <p className="mca-test-instructions-good-luck">Good luck!</p>
        </div>
    )
}

export default Instructions

