import React from 'react';
import mainImage from './img_lights.jpg';

const Main = () => {
    return (
        <div>
            <p> This is main page. And here we have nice picture.</p>
            <img src={mainImage} alt="main-img"></img>
        </div>
    )
}

export default Main;