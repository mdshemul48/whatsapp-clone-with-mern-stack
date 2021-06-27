import { RepeatOneSharp } from '@material-ui/icons'
import React, { useEffect, useState, useContext } from 'react'

import authContext from '../../context/authContext'
import SidebarChat from './SidebarChat'
// css 
import classes from "./SidebarChats.module.css"
const SidebarChats = () => {
    const { authInfo } = useContext(authContext)
    const [allRoom, setAllRoom] = useState([])
    useEffect(() => {
        const fetchRoomData = async () => {
            const response = await fetch("http://localhost:9000/room/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${authInfo.token}`
                }
            })


            if (!response.ok) {
                return alert(await response.text)
            }

            const responseData = await response.json()
            setAllRoom(responseData)
        }
        fetchRoomData()
    }, [authInfo.token])


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

