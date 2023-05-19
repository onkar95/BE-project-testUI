import React, { useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import './testRight.css'


const VideoStreaming = () => {
    const webcamRef = useRef(null);

    useEffect(() => {
        const getVideoStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (webcamRef.current) {
                    webcamRef.current.video.srcObject = stream;
                }
            } catch (error) {
                console.log('Error accessing video stream:', error);
            }
        };

        getVideoStream();
    }, []);

    console.log("webcamRef", webcamRef)
    return (
        <div className='video_component'>

            <Webcam className='video' audio={false} ref={webcamRef} />

        </div>
    );
};


export default VideoStreaming

