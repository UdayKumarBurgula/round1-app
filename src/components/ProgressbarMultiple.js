import "../App.css";
import React, { useState, useRef, useEffect } from "react";

const ProgressbarMultiple = ({ progresses }) => {

    return (
        <div className="progress-bar-multiple-container">
            {
                progresses.map((progress, index) => (
                    <div key={index} className="progress-bar-container">
                        <div className="outer">
                            <div className="inner"
                                style={{
                                    width: `${progress}%`,
                                    color: progress < 5 ? 'black' : 'green'
                                }}>
                                {progress}%
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ProgressbarMultiple;