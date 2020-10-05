import React from "react";
import "./ChatMessage.css";

function ChatMessage(props) {
    return (
        <div>
           <p className={`chat__message ${props.className}`}>
                    <span className="chat__name">{props.name}</span>
                    This is a message
                    <span className="chat__timestamp">
                      {new Date().toLocaleString("en-US", 
                                 { 
                                     hour: "numeric", 
                                     minute : "numeric",
                                     hour12: true})
                                 }
                      {/* {`${hours}:${minutes}`}   */}
                    </span>
                </p> 
        </div>
    );
}

export default ChatMessage;