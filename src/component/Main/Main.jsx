import React from 'react'
import "./Main.css"
import MakeSlider from "../MakeSlider/MakeSlider";

import videobg from '../../assest/interior.mp4';
const Main = () => {
    return (
        <div className="container">
            <div className="main">
                <div className="overlay"></div>
                <video src={videobg} autoPlay loop muted />
                <div className="content">
                    <h1>Welcome </h1>
                    <p>to my amazing website</p>
                </div>
            </div>
            <MakeSlider />

        </div>
    );
}

export default Main