import React from 'react'

// avatar
import { Avatar } from '@material-ui/core'
// css
import classes from "./SidebarChart.module.css"
const SidebarChart = () => {
    return (
        <div className={classes.sidebar__chat}>
            <Avatar />
            <div className={classes.sidebar__chatInfo}>
                <h2>Room Name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )
}

export default SidebarChart
