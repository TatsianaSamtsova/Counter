import React, {useState} from 'react';
import Button from "../Button/Button";
import SettingContainer from "./Setting/SettingContainer";
import Scoreboard from "./Scoreboard/Scoreboard";
import s from './Counter.module.css'


function Counter() {

    let [count, setCount] = useState<number>(0);
    let [max, setMax] = useState<number>(5);

    let [maxValue, setMaxValue] = useState<number>(5);
    let [startValue, setStartValue] = useState<number>(0);

    let maxValueChange = (maxValue: number) => {
        setMaxValue(maxValue);
    }

    let startValueChange = (startValue: number) => {
        setStartValue(startValue);
    }

    let setSetting = () => {
        setCount(startValue);
        setMax(maxValue);
    }

    let incCount = () => {
        setCount(count + 1);
    }

    let resetCount = () => {
        setCount(startValue);
    }

    return (
        <div className={s.displays}>
            <div className={s.display} >
                <div className={s.counter}>
                    <Scoreboard count={count} max={max} maxValue={maxValue} startValue={startValue}/>
                </div>
                <div className={s.buttons}>
                    <Button title={'inc'} callBack={incCount} disabled={count === max ? true : false}/>
                    <Button title={'reset'} callBack={resetCount} disabled={count === startValue ? true : false}/>
                </div>
            </div>
            <div >
                <SettingContainer count={count} setCount={setCount} setMax={setMax}
                                  maxValue={maxValue} startValue={startValue}
                                  maxValueChange={maxValueChange}
                                  startValueChange={startValueChange}
                                  setSetting={setSetting}/>
            </div>

        </div>
    )
}

export default Counter;

