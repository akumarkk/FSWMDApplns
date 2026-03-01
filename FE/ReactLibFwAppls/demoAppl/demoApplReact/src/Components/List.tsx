import { useState } from "react";
import {Item} from "./Item";

import './List.css'

const initList = [
    {name : "tomato", calorie: 20},
    {name : "rice", calorie: 200},
    {name : "spagetti", calorie: 220}
];

export function List() {
    const listArr = useState(initList);
    const [list, setList] = listArr;

    const removeHigherCalorieItem = () => {
        const newList = list.filter(item => item.calorie <= 100);
        setList(newList);
    }

    return (
        <div>
            <header>
                <h2>
                    Grocery List
                </h2>
                {
                    list.map((item, index) => {
                        return <Item item={item} key={`item-${index}`}></Item>
                    })
                }

                <button onClick={removeHigherCalorieItem} className="remove-btn"> Remove Unhealthy</button>
            </header>
        </div>
    );

}