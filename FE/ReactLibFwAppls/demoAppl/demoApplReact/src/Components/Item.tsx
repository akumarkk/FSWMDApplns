import React from 'react'


export function Item(props: { name: string, calorie: number }) {
    return (
        <div>
            <h3>Name : {props.name}</h3>
            <h3>Calorie : {props.calorie}</h3>
        </div>
    );

}