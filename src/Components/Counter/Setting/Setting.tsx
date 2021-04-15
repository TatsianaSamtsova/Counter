import React from 'react';
import Button from "../../Button/Button";
import SettingDisplay from "./SettingDisplay";
import s from './Setting.module.css'


type PropsType = {
    count: number
    maxValue: number
    startValue: number
    setCount: (count: number) => void
    setMax: (max: number) => void
    maxValueChange: (maxValue: number) => void
    startValueChange: (startValue: number) => void
    setCustomization: () => void
}

function Setting(props: PropsType) {

    return (
        <div className={s.display}>
            <div className={s.counter}>
            <SettingDisplay maxValue={props.maxValue} startValue={props.startValue}
                                  maxValueChange={props.maxValueChange}
                                  startValueChange={props.startValueChange}/>
            </div>
            <div className={s.buttons}>
            <Button title={'set'} callBack={props.setCustomization} disabled={
                props.startValue < 0 ? true : false ||
                props.maxValue < 0 ? true : false ||
                    props.startValue >= props.maxValue}/>
            </div>
        </div>
    )
}

export default Setting;

