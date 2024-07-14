import React from "react";
import "../styles/Splash.css";
import AmbiQ from "../assets/AmbiQ Logo_White.png"






const Splash = ({ cards }) => {

    return (

        <div className="splash-screen">
            <img src={AmbiQ} alt="Logo" className="splash-logo" />
            
        </div>
    );
};



export default Splash;


