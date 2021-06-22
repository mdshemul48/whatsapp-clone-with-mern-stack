import React from 'react'

// importing icon
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { IconButton } from "@material-ui/core"

// importing castom css
import classes from "./HeaderRight.module.css"
const HeaderRight = () => {
    return (
        <div className={classes.sidebar__headerRight}>
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
    )
}

export default HeaderRight
