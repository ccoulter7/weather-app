import React, { useState, useEffect } from 'react';

const Loading = () => {
    const [dots, setDots] = useState('.');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDots(prevDots => prevDots.length < 5 ? prevDots + '.' : '');
        }, 500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1 className="loading-word">Loading<span className="dots">{dots}</span></h1>
        </div>
    );
}

export default Loading;
