import React from "react";
import ChatMessage from "./Messages/ChatMessage";
import ChatFooter from "./Footer/ChatFooter";
import { Avatar,IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";

import "./Chat.css";


function Chat({ messages }) {
    // let time = new Date();
    // let hours = time.getHours();
    // let minutes = time.getMinutes();
    console.log(messages);
    return (
        <div className = "chat">
            {/* <h1>Chat Component</h1> */}
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div> 

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map((message, index) => (
                    <ChatMessage key = {index}
                                 name={message.name}
                                 content = {message.message}
                                 time = {message.timestamp}
                                 messageReceived = {message.received}  />
                ))}
                
                            
            </div>
            <ChatFooter />
        </div>
    );
}

export default Chat;