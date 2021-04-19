import React, {ChangeEvent} from 'react';
import Button from "../../Button/Button";
import Setting from "./Setting";
import s from './SettingContainer.module.css'


type PropsType = {
    count: number
    maxValue: number
    startValue: number
    setCount: (count: number) => void
    setMax: (max: number) => void
    maxValueChange: (maxValue: number) => void
    startValueChange: (startValue: number) => void
    setSetting: () => void
}

function SettingContainer(props: PropsType) {
    let onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.maxValueChange(parseInt(e.currentTarget.value));
    }

    let onStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.startValueChange(parseInt(e.currentTarget.value));
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.nativeEvent.key === ',') {
            e.preventDefault()
        }
    }


    const setDisabled = props.startValue < 0
        || props.maxValue < 0
        || props.startValue >= props.maxValue;
    return (
        <div className={s.display}>
            <div className={s.counter}>
            <Setting maxValue={props.maxValue} startValue={props.startValue}
                     onKeyPress={handleKeyPress}
                     onMaxValueChange={onMaxValueChange}
                     onStartValueChange={onStartValueChange}

            />
            </div>
            <div className={s.buttons}>
                <Button title={'set'} callBack={props.setSetting} disabled={setDisabled}/>
            </div>
        </div>
    )
}

export default SettingContainer;

