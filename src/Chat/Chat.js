import React from 'react'

import classes from "./Chat.module.css"
import ChatBody from './components/ChatBody'
import ChatHeader from './components/ChatHeader'
const Chat = () => {
    return (
        <div className={classes.chat}>
            <ChatHeader />
            <ChatBody />
        </div>
    )
}

export default Chat
