import React from 'react'
import Avatar from "@material-ui/core/Avatar"

//---
// COMPONENT_NAME: chat header
//INFO: this will be the header of the chat. this will show chat user picture, name, last seen date etc.
//---

// css
import classes from "./ChatHeader.module.css"
import ChatHeaderRight from './ChatHeaderRight'
const ChatHeader = () => {
    return (
        <div className={classes.chat__header}>
            <Avatar />
            <div className={classes.chat__headerInfo}>
                <h3>Room Name</h3>
                <p>Last seen at...</p>
            </div>
            <ChatHeaderRight />
        </div>
    )
}

export default ChatHeader
