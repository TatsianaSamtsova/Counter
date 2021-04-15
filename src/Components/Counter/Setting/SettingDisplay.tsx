import React, {ChangeEvent} from 'react';
import s from './SettingDisplay.module.css'

type SettingDisplayPropsType = {
    maxValue: number
    startValue: number
    maxValueChange: (maxValue: number) => void
    startValueChange: (startValue: number) => void
}

function SettingDisplay(props: SettingDisplayPropsType) {

    let onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.maxValueChange(Number(e.currentTarget.value));
    }

    let onStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.startValueChange(Number(e.currentTarget.value));
    }

    return (
        <div className={s.counter}>
            <div >
                <label>max value<input
                    className={s.inputValue}
                    type='number' value={props.maxValue}
                    onChange={onMaxValueChange}/></label>
            </div>
            <div >
                <label>start value<input
                    className={s.inputValue}
                    type='number' value={props.startValue}
                    onChange={onStartValueChange}/></label>
            </div>
        </div>
    )
}

export default SettingDisplay;