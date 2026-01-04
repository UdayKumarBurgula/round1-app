import "../App.css";
import React, { useState, useRef, useEffect } from "react";
import json from "../data/files.json";


/// render list of files and folders recursively
const List = ({ items }) => {
    return (
        <div className="file-explorer-container-filelist">
            {
                items.map((node, index) => (
                    <div key={node.id} >
                        <span>{node.name}</span>
                        {
                            node.isFolder === true && node.children && (
                                <div className="file-explorer-container-filelist-folder-contents" style={{ marginLeft: "20px" }}>
								    <List items={node.children} />
							    </div>
                            )
                        }
                    </div>
                     
                ))
            }
        </div>
    );
}



const FileExplorer = ({ progress, index }) => {

    const [files, setFiles] = useState(json);

	return (
        <div className="file-explorer-container">
            <List items={files} />
        </div>
    );
}


export default FileExplorer;