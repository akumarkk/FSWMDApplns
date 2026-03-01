import React from 'react'

import './Item.css'

export function Item(props: {item: { name: string, calorie: number }}) {
    return (
        <div className='item'>
            <h3>Name : {props.item.name}</h3>
            <h3>Calorie : {props.item.calorie}</h3>
        </div>
    );

}