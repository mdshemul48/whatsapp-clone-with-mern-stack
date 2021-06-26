import React, { useState, useContext } from 'react'

// this is auth context and this will handler all authorization and authentication 
import authContext from '../context/authContext'

import Input from "./components/Input"
import classes from "./Login.module.css"

const Login = (props) => {

    const { setLogInHandler } = useContext(authContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value)
    }
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (username.trim().length === 0 || password.trim().length === 0) {
            return alert("please enter a valid username and password.")
        }
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:9000/user/auth", {
                    method: "POST",
                    body: JSON.stringify({ username, password }),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                })

                if (!response.ok) {
                    return alert(await response.text())
                }

                const responseData = await response.json()
                setLogInHandler(responseData.token, responseData.userId)
            } catch (err) {
                console.log(err)
                return alert(JSON.stringify(err))
            }

        }

        fetchData()
    }


    document.title = "Login | whatsapp"
    return (
        <div className={classes.login__page}>
            <div className={classes.login__section}>
                <form className={classes.login__submit} onSubmit={submitHandler}>
                    <h3 className={classes.login__signupText}>Login or Signup</h3>
                    <Input id="username" placeholder="Username" onChange={usernameChangeHandler} />
                    <Input id="password" type="password" placeholder="Password" onChange={passwordChangeHandler} />
                    <button className={classes.login__submitBtn}>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login
