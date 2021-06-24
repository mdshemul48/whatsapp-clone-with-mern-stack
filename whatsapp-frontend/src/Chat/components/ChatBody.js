import React, { useEffect, useState } from 'react'
import Pusher from 'pusher-js'
//---
// COMPONENT_NAME: chat body 
// INFO: all message(chat) will show here.. this is the main body section.
//---
import ChatMessage from './ChatMessage'
import classes from "./ChatBody.module.css"
const ChatBody = () => {
    const [message, setMessage] = useState([])

    useEffect(() => {
        // this will listen for incoming message for pusher and update the message array if new message arrive. 
        const pusher = new Pusher('8dda2a32cdc70f362461', {
            cluster: 'ap1'
        });
        const message = pusher.subscribe("messages")
        message.bind("insert", (data) => {
            setMessage((prevState) => {
                return [...prevState, data]
            })
        })
    }, [])
    useEffect(() => {
        
    }, [])
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
