import { IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import React from 'react'

//---
// COMPONENT_NAME: right header section
// INFO: in this component all will be the icon for chat management. like chat settings, chat search icon etc.
//---

import classes from './ChatHeaderRight.module.css'
const ChatHeaderRight = () => {
    return (
        <div className={classes.chat__headerRight}>
            <IconButton>
                <SearchOutlined />
            </IconButton>
            <IconButton>
                <AttachFile />
            </IconButton>
            <IconButton>
                <MoreVert />
            </IconButton>
        </div>
    )
}

export default ChatHeaderRight
