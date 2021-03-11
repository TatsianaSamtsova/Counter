import React from "react";
type CounterType = {
    count: number
}
export function Counter(props: CounterType) {
    return (
        <div className={props.count === 5? "Counter Counter__Red" : "Counter"}>{props.count}</div>
    );

}