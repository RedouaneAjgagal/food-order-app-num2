import style from './SecondaryBtn.module.css'
import React from 'react'

const SecondaryBtn = (props) => {
    const classes = `${props.className} ${style.SecondaryBtn}`
    return (
        <button className={classes} onClick={props.onClick} >{props.children}</button>
    )
}

export default SecondaryBtn