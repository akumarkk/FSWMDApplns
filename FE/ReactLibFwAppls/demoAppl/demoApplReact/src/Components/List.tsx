import {Item} from "./Item";

const initList = [
    {name : "tomato", calorie: 20},
    {name : "rice", calorie: 200},
    {name : "spagetti", calorie: 220}
];

export function List() {
    return (
        <div>
            <header>
                <h2>
                    Grocery List
                </h2>
                <Item></Item>
            </header>
        </div>
    );

}