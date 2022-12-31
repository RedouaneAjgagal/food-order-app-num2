import style from './Wrapper.module.css';
import React from 'react'

const Wrapper = (props) => {
    const classes = `${props.className} ${style.Wrapper}`;
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Wrapper