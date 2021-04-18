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


    return (

        <div className={s.counter}>
            <div>
                <label>max value</label>
                <input
                    className={
                        `${s.inputValue} 
                         ${props.maxValue < 0 ? s.inputValue_Red : '' ||
                        props.startValue >= props.maxValue ? s.inputValue_Red : ''}`
                    }
                    type='number' value={props.maxValue}
                    onKeyPress={(event: any)=>{props.onKeyPress(event )}}
                    onChange={props.onMaxValueChange}/>
            </div>
            <div>
                <label>start value<input
                    className={
                        `${s.inputValue} 
                         ${props.startValue < 0 ? s.inputValue_Red : '' ||
                        props.startValue >= props.maxValue ? s.inputValue_Red : ''}`
                    }
                    type='number' value={props.startValue}
                    onChange={props.onStartValueChange}/></label>
            </div>
        </div>

    )
}

export default Setting;