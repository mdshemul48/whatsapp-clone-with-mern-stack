import React from 'react'

// castom css
import classes from "./SidebarHeader.module.css"
const SidebarHeader = () => {
    return (
        <div className={classes.sidebar__header}>
            <h1>sidebar</h1>
            <div className={classes.sidebar__headerRight}>

            </div>
        </div>
    )
}

export default SidebarHeader
