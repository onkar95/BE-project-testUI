import { createContext, useContext, useEffect, useState } from "react";


export const TestContest = createContext(null)

export const TestDataProvider = ({ children }) => {
    let storedSeconds = localStorage.getItem("remainingTime")
    let status = localStorage.getItem("testStatus")
    let [seconds, setSeconds] = useState(storedSeconds || 15 * 60);
    let [testStatus, setTestStatus] = useState(status || '');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds > 0) {
                    localStorage.setItem('remainingTime', prevSeconds)
                    return prevSeconds - 1;
                } else {
                    clearInterval(intervalId);
                    return prevSeconds;
                }
            });
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };

    }, []);


    return (
        <TestContest.Provider value={{
            seconds, setSeconds,
            testStatus, setTestStatus
        }}>
            {children}
        </TestContest.Provider>
    )
}