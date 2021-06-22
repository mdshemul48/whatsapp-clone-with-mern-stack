import React from 'react'

// icons 
import SearchOutlined from '@material-ui/icons/SearchOutlined'

// css
import classes from "./SidebarSearch.module.css"
function SidebarSearch() {
    return (
        <div className={classes.sidebar__search}>
            <div className={classes.sidebar__searchContainer}>
                <SearchOutlined />
                <input type="text" placeholder="Search or start new chat" />
            </div>
        </div>
    )
}

export default SidebarSearch
