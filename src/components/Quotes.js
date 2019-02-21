import React from "react";

import '../../src/App.css'

const quote = (props) => {
    return (
        <div className = "quotebox">
           <p id="text">{props.text}</p>
           <p id="author">---{props.author}---</p>
           <div class="button">
            <button 
                id="new-quote" 
                onClick={props.click} 
                style={props.s}>GiveMeQuotes</button>

            <button class="tweet">
                <a href = "twitter.com/intent/tweet" id="tweet-quote" style={props.s} target="_blank" title="Tweet this quote">
                    <i class="fa fa-twitter"></i>
                </a>
            </button>
           </div>
        </div>
    )
} 

export default quote;