import React, { useState, useEffect } from "react";
import "../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

function Display(props) {

    {/* Fetch data from API. */}
    const [data, setData] = useState("");
    useEffect(() => {
        (async () => {
        const response = await fetch("https://random.dog/woof.json");
        const parsed = await response.json();
        setData(parsed['url']);
        })();
    }, []);

    return(
        <div>
            <div>
                {/* Identify it is mp4 file or not. */}
                {data.substring(data.length - 3, data.length) == 'mp4' ?
                    <Player
                        playsInline
                        fluid={false}
                        width={250}
                        height={250}
                        src = {data}
                        />

                    : 
                    <img width={250} height={250} src = {data}/>
                }
            </div>
         
        </div>
        
    )
}

export default Display;