import React from 'react'

import classes from "./Input.module.css"
const Input = (props) => {

    return (
        <div className={classes.login__input}>
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id} type={props.type || "text"} onChange={props.onChange} placeholder={props.placeholder} />
        </div>
    )
}

export default Input
