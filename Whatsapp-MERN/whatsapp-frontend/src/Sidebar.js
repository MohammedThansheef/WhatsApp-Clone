import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SidebarChat from "./SidebarChat";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_33eMSQFaWNqGVIpgLKXv75ckZxaLEPnrF2v_G=s83-c-mo" />
        <div className="sidebar__header-right">
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
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search or start a new chat" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
