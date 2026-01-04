import "../App.css";
import React, { useState, useRef, useEffect } from "react";
import Progressbar from "./Progressbar";

const ProgressbarMultiple = ({ progresses }) => {
   
    return (
        <div className="progress-bar-multiple-container">
            {
                progresses.map((progress, index) => (
                    <Progressbar index={index}  progress={progress} />
                ))
            }
        </div>
    );
}

export default ProgressbarMultiple;