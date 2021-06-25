import React from 'react'


//  component
import SidebarHeader from './components/SidebarHeader'
import SidebarChats from './components/SidebarChats'

// icon 
import SidebarSearch from './components/SidebarSearch'
//  css
import classes from "./SideBar.module.css"

const SideBar = () => {
    return (
        <div className={classes.sideBar}>
            <SidebarHeader />
            <SidebarSearch />
            <SidebarChats />
        </div>
    )
}

export default SideBar
