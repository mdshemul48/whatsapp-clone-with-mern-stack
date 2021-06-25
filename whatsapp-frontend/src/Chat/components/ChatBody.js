import React, { useEffect, useState } from 'react'
import Pusher from 'pusher-js'
//---
// COMPONENT_NAME: chat body 
// INFO: all message(chat) will show here.. this is the main body section.
//---
import useFetch from '../../hooks/use-fetch'
import ChatMessage from './ChatMessage'
import classes from "./ChatBody.module.css"
const ChatBody = () => {
    const [message, setMessage] = useState([])
    const [error, loading, fetchData] = useFetch(setMessage)

    useEffect(() => {
        // this will listen for incoming message for pusher and update the message array if new message arrive. 
        const pusher = new Pusher('8dda2a32cdc70f362461', {
            cluster: 'ap1'
        });
        const message = pusher.subscribe("messages")
        message.bind("inserted", (data) => {
            console.log(data)
            setMessage((prevState) => {
                return [...prevState, data]
            })
        })

        return () => {
            message.unbind()
            message.unsubscribe()
        }
    }, [])


    // useEffect(() => {
    //     const fetch = async () => {
    //         const data = await fetchData("http://localhost:9000/messages/sync")
    //         setMessage(data)
    //     }
    //     fetch()
    // }, [fetchData])


    return (
        <div className={classes.chat__body}>
            {message.map((text) => (
                <ChatMessage name={text.name} date={text.timestamp} message={text.message} receiver={!text.received} />
            ))}
        </div>
    )
}

export default ChatBody
