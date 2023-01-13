import React from 'react'
import style from './PrimaryBtn.module.css';

const PrimaryBtn = (props) => {
    const classes = `${props.className} ${style.PrimaryBtn}`
    return (
        <button className={classes} onClick={props.onClick}>{props.children}</button>
    )
}

export default PrimaryBtn;