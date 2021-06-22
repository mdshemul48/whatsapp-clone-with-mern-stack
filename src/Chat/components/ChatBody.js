import React from 'react'

//---
// COMPONENT_NAME: chat body 
// INFO: all message(chat) will show here.. this is the main body section.
//---

import classes from "./ChatBody.module.css"
const ChatBody = () => {
    return (
        <div className={classes.chat__body}>
            <p>
                <span className={classes.chat__name}>sam</span>
                This is the message
                <span className={classes.chat__timestamp}>
                    {new Date().toUTCString()}
                </span>
            </p>
        </div>
    )
}

export default ChatBody