import React from "react";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { IconButton } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";

import "./ChatFooter.css";
import { Send } from "@material-ui/icons";


function ChatFooter(props) {
    return (
        <div className="chat__footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <form>
                    <input type="text" 
                           placeholder="Type a message"/>
                    <button type="submit"><Send /></button>
                    
                    </form>
                    <MicIcon />
            </div>
    );
}

export default ChatFooter;