import React, { useState, useEffect } from 'react';
import './timer.css'
function Timer() {
    const [seconds, setSeconds] = useState(60 * 60);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return (
        <div className="timer-container">
            <h1 className="timer-heading">Countdown Timer</h1>
            <h2 className="timer-display">{`${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`}</h2>
        </div>
    );
}

export default Timer;
