import React from "react";
import "../styles/Splash.css";
import AmbiQ from "../assets/AmbiQ Logo_White.png"
import Accident from "../assets/Accident.png"






const Splash = ({ cards }) => {

    return (

        <div className="splash-screen">
            <div className="splash-background"></div>
            <img src={Accident} alt="Logo" className="accident-logo"/>
            <img src={AmbiQ} alt="Logo" className="splash-logo" />
        </div>
    );
};



export default Splash;


