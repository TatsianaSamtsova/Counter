import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Buttons} from "./Buttons";



function App() {
    const [number, setNumber] = useState<number>(0)

    const Inc= ()=>{
        if( number< 5)
        setNumber(number+1)
    }
    const Reset =()=>{
        setNumber(0)
    }
    return (
        <div className="App">
            <div className="calculator">
            <Counter count={number}/>
            <Buttons Inc={Inc} Reset={Reset} count={number}/>

            </div>
        </div>
    );
}

export default App;
