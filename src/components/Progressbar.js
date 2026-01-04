import "../App.css";
import React, { useState, useRef, useEffect } from "react";

const totalSteps = 100;

const Progressbar = ({ progress }) => {

    return (
        <div className="progress-bar-container">
            <div className="outer">
                <div className="inner" style={{ width: `${progress}%` }}>{progress}%</div>
            </div>
        </div>
    );
}


export default Progressbar;