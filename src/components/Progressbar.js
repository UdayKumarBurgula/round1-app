import "../App.css";
import React, { useState, useRef, useEffect } from "react";


const Progressbar = ({ progress, index }) => {
    const [animatedProgress, setAnimatedProgress] = useState(0);

    useEffect(() => {
        setTimeout(() => setAnimatedProgress(progress), 100);
    }, [progress]);

    return (
        <div className="progress-bar-container">

            {/* // Hard-coded with implementation */}
            {/*<div className="outer">*/}
            {/*    <div className="inner" style={{ width: `${progress}%` }}>{progress}%</div>*/}
            {/*</div>*/}

            <div className="outer-multiple">
                <div className="inner-multiple"
                    style={{
                        // width: `${progress}%`,
                        transform: `translateX(${animatedProgress - 100}%)`,
                        color: animatedProgress < 5 ? 'black' : 'green'
                    }}
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    {progress}%
                </div>
            </div>
        </div>
    );
}


export default Progressbar;