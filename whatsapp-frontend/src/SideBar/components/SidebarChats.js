import React from 'react'


import SidebarChat from './SidebarChat'
// css 
import classes from "./SidebarChats.module.css"
const SidebarChats = () => {
    return (
        <div className={classes.sidebar__chats}>
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
    )
}

export default SidebarChats

