import React from 'react'

import './Item.css'

export function Item(props: { name: string, calorie: number }) {
    return (
        <div className='item'>
            <h3>Name : {props.name}</h3>
            <h3>Calorie : {props.calorie}</h3>
        </div>
    );

}