import React, { useState, useEffect } from 'react';
function Timer({ seconds, setSeconds }) {

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (seconds > 0) setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

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
