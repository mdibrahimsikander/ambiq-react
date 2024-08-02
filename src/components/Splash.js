import React from "react";
import "../styles/Splash.css";






const Splash = ({ cards }) => {

    return (

        <div className="splash-screen">
            <svg className="pulse" width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                <path class="pulse-path" d="M 0 100 L 50 100 L 70 50 L 90 150 L 110 100 L 130 100 L 151 47 L 162 99 L 253 109 L 270 50 L 290 150 L 310 100 L 350 100 L 370 50 L 390 100" />
                <text class="text" x="200" y="100">AmbiQ</text>
            </svg>
        </div>
    );
};



export default Splash;


