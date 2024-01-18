import React, { useState, useEffect } from 'react';
import { env } from './env';
import Weather from '../src/components/Weather';

const Main = () => {
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });

                setLat(position.coords.latitude);
                setLong(position.coords.longitude);

                console.log("Latitude is:", position.coords.latitude);
                console.log("Longitude is:", position.coords.longitude);

                const response = await fetch(`${env.REACT_APP_API_URL}/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${env.REACT_APP_API_KEY}`);
                const result = await response.json();
                setData(result);
                console.log(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array to ensure the effect runs only once on component mount

    return (
        <div className="App">
            {loading ? (
                <div>Loading...</div>
            ) : (
                (typeof data?.main !== 'undefined') ? (
                    <Weather weatherData={data} />
                ) : (
                    <div>No data available.</div>
                )
            )}
        </div>
    );
}

export default Main;
