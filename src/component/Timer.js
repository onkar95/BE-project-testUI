import React, { useState, useEffect, useContext } from 'react';
import { TestContest } from '../context/TestContext';
function Timer() {
    let { seconds, setSeconds } = useContext(TestContest)

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return (
        <div className="timer-container">
            <h1 className="timer-heading">Time Left:</h1>
            <h2 className="timer-display">{`${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`}</h2>
        </div>
    );
}

export default Timer;
