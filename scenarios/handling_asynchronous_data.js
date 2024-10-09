/*
Question: You are building a weather app that fetches data from an external API. 
How would you handle fetching data and displaying a loading spinner while the data is being fetched?

Answer:

* Use the useEffect hook to trigger the data fetching when the component mounts.
* Use useState to manage the state of the data and a loading state.
* Initially, set the loading state to true. When the data is fetched, update the state 
with the data and set loading to false.
* Conditionally render a spinner while the data is loading, and the actual data once the fetch is complete.

*/

import React, { useState, useEffect } from 'react';

const WeatherApp = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.weather.com/v3/wx/conditions/current')
            .then((response) => response.json())
            .then((result) => {
                setData(result);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Weather Today: {data.weather}</h1>
        </div>
    );
};

export default WeatherApp;