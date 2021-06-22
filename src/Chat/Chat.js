import React from 'react'

import classes from "./Chat.module.css"
import ChatHeader from './components/ChatHeader'
const Chat = () => {
    return (
        <div className={classes.chat}>
            <ChatHeader />
        </div>
    )
}

export default Chat
