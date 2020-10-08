import React from "react";
import "./ChatMessage.css";

function ChatMessage(props) {
    return (
        <div>
           <p className={`chat__message ${props.messageReceived  && 'chat__receiver'}`} >
                    <span className="chat__name">{props.name}</span>
                    {props.content}
                    <span className="chat__timestamp">
                      {console.log(props.time)}
                      {props.time}
                      
                      {/* {new Date().toLocaleString("en-US", 
                                 { 
                                     hour: "numeric", 
                                     minute : "numeric",
                                     hour12: true})
                                 } */}
                      {/* {`${hours}:${minutes}`}   */}
                    </span>
                </p> 
        </div>
    );
}

export default ChatMessage;