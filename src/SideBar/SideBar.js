import React from 'react'


//  component
import SidebarHeader from './components/SidebarHeader'

// icon 
import SidebarSearch from './components/SidebarSearch'
//  css
import classes from "./SideBar.module.css"

const SideBar = () => {
    return (
        <div className={classes.sideBar}>
            <SidebarHeader />
            <SidebarSearch />


        </div>
    )
}

export default SideBar
