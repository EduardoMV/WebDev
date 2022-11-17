import React from 'react'

function Card(props) {
    // const img = "https://picsum.photos/200"
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.img} alt="ran" />
            <p> {props.phone}</p>
            <p> {props.email} </p>
        </div>
    )
}

export default Card;
