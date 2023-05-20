import { createContext, useContext, useEffect, useState } from "react";


export const TestContest = createContext(null)

export const TestDataProvider = ({ children }) => {
    let [seconds, setSeconds] = useState(60 * 60);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds > 0) {
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
            seconds, setSeconds
        }}>
            {children}
        </TestContest.Provider>
    )
}