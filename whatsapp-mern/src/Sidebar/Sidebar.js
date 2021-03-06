import React from "react";
import "./Sidebar.css";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat/SidebarChat";

function Sidebar() {
    return (
        <div className="sidebar">
            {/* <h1>This is the Sidebar</h1> */}
            <div className="sidebar__header">
                <IconButton>
                    <Avatar src = "" />
                </IconButton>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton> 
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start a new chat"/>
                </div>
            </div>
            <div className="sidebar__chats">
                <h3>Add new chat</h3>
               <SidebarChat></SidebarChat>
               <SidebarChat></SidebarChat>
               <SidebarChat></SidebarChat>
            </div>
        </div>
    );
}

export default Sidebar; 