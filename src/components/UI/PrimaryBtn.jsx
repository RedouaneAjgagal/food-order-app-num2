import React from 'react'
import style from './PrimaryBtn.module.css';

const PrimaryBtn = (props) => {
    const classes = `${props.className} ${style.PrimaryBtn}`
    return (
        <button className={classes}>{props.children}</button>
    )
}

export default PrimaryBtn