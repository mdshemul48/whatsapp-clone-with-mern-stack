import React from 'react'


//  icons and avatar
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { Avatar, IconButton } from "@material-ui/core"


// castom css
import classes from "./SidebarHeader.module.css"
const SidebarHeader = () => {
    return (
        <div className={classes.sidebar__header}>
            <Avatar src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png" />
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
        </div>
    )
}

export default SidebarHeader
