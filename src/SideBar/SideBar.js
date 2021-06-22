import React from 'react'

import { Avatar } from "@material-ui/core"

// sidebar component
import SidebarHeader from './components/SidebarHeader'

// sidebar css
import classes from "./SideBar.module.css"

const SideBar = () => {
    return (
        <div className={classes.sideBar}>
            <SidebarHeader />
        </div>
    )
}

export default SideBar
