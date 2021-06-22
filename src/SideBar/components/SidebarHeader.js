import React from 'react'

// castom component
import HeaderRight from './HeaderRight'
// avatar
import { Avatar } from "@material-ui/core"

// castom css
import classes from "./SidebarHeader.module.css"
const SidebarHeader = () => {
    return (
        <div className={classes.sidebar__header}>
            <Avatar src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png" />
            <HeaderRight />
        </div>
    )
}

export default SidebarHeader
