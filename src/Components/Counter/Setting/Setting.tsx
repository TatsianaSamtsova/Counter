import React, {ChangeEvent} from 'react';
import s from './Setting.module.css'

type SettingDisplayPropsType = {
    maxValue: number
    startValue: number
    onKeyPress: (e:React.KeyboardEvent<HTMLInputElement>) => void
    onMaxValueChange:(e: ChangeEvent<HTMLInputElement>) => void
    onStartValueChange:(e: ChangeEvent<HTMLInputElement>) => void
}



function Setting(props: SettingDisplayPropsType) {
    const maxError = props.maxValue < 0 || props.startValue >= props.maxValue
    const startError = props.startValue < 0 || props.startValue >= props.maxValue

    return (

        <div className={s.counter}>
            <div>
                <label>max value</label>
                <input
                    className={
                        `${s.inputValue} 
                         ${ maxError ? s.inputValue_Red : ''}`
                    }
                    type='number' value={props.maxValue}
                    onKeyPress={(e)=>{props.onKeyPress(e )}}
                    onChange={props.onMaxValueChange}/>
            </div>
            <div>
                <label>start value<input
                    className={
                        `${s.inputValue} 
                         ${startError ? s.inputValue_Red : ''}`
                    }
                    type='number' value={props.startValue}
                    onKeyPress={(e)=>{props.onKeyPress(e )}}
                    onChange={props.onStartValueChange}/></label>
            </div>
        </div>

    )
}

export default Setting;