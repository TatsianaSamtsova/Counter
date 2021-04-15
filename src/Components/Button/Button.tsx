import React from 'react'
import s from './Button.module.css'


type ButtonPropsType = {
    title: 'inc' | 'reset' | 'set'
    callBack: () => void
    disabled?: boolean
}

function Button(props: ButtonPropsType) {
    return (
        <button className={s.button} onClick={props.callBack} disabled={props.disabled}>
            {props.title}
        </button>
    )
}

export default Button;