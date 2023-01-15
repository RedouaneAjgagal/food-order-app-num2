import React from 'react'

const InputContainer = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor={props.id}>{props.label}</label>
            <input type="text" name={props.id} id={props.id} ref={props.refInput} />
        </div>
    )
}

export default InputContainer