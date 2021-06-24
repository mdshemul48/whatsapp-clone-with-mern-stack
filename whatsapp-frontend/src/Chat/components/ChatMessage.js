import React from 'react'

//---
// COMPONENT_NAME: chat message component
// INFO: this will only show the message, name, time.
//---

import classes from "./ChatMessage.module.css"
function ChatMessage(props) {
    return (
        <p className={`${classes.chat__message} ${props.receiver ? classes.chat__receiver : ""}`}>
            <span className={classes.chat__name}>{props.name || "sam"}</span>
            {props.message || "test message for now"}
            <span className={classes.chat__timestamp}>
                {props.date}
            </span>
        </p>
    )
}

export default ChatMessage
