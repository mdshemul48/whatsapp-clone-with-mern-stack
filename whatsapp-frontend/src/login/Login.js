import React from 'react'


import Input from "./components/Input"

import classes from "./Login.module.css"

const Login = () => {
    document.title = "Login | whatsapp"
    return (
        <div className={classes.login__page}>
            <div className={classes.login__section}>
                <form className={classes.login__submit}>
                    <h3 className={classes.login__signupText}>Login or Signup</h3>
                    <Input id="username" placeholder="Username" />
                    <Input id="password" type="password" placeholder="Password" />
                    <button className={classes.login__submitBtn}>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login
