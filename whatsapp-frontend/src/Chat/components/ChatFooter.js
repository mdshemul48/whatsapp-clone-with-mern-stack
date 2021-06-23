import { InsertEmoticon, Mic as MicIcon } from '@material-ui/icons'
import React from 'react'

//---
// COMPONENT_NAME: chat footer
// INFO: this will be the message box. where user will type message and send.
//---

import classes from "./ChatFooter.module.css"
const ChatFooter = () => {
    return (
        <div className={classes.chat__footer}>
            <InsertEmoticon />
            <form>
                <input type="text" placeholder="Type a message" />
                <button type="submit">Send a message</button>
            </form>
            <MicIcon />
        </div>
    )
}

export default ChatFooter
