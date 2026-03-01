import React from 'react'

import './Item.css'

export function Item(props: {item: { name: string, calorie: number }, editable?: boolean, onClick: () => void, onDoubleClick?: () => void}) {
    return (
        <div className='item'>
            {props.editable ? 
            <input type="text" defaultValue={props.item.name} />
            : 
            <h3 onDoubleClick={props.onDoubleClick}>Name : {props.item.name}</h3>
            }
            <h3>Calorie : {props.item.calorie}</h3>
            <button className="remove-btn" onClick={props.onClick}>Remove</button>
        </div>
    );

}