import React from 'react'

//---
// COMPONENT_NAME: chat body 
// INFO: all message(chat) will show here.. this is the main body section.
//---
import ChatMessage from './ChatMessage'
import classes from "./ChatBody.module.css"
const ChatBody = () => {
    return (
        <div className={classes.chat__body}>
            <ChatMessage />
            <ChatMessage receiver />
            <ChatMessage />
            <ChatMessage />
        </div>
    )
}

export default ChatBody
