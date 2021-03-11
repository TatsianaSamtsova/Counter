import React from "react";

type ButtonsType={
    count: number
    Inc:()=>void
    Reset:()=>void
}
export function Buttons(props:ButtonsType) {
    return (
        <div className={"Buttons"}>
            <button className={props.count<5 ? "Button ActiveButton": "Button"}
                    onClick={props.Inc} disabled={props.count === 5}>Inc</button>
            <button className={props.count>=1 ? "Button ActiveButton": "Button"}
                    onClick={props.Reset} disabled={props.count === 0}>Reset</button>
        </div>
    );

}