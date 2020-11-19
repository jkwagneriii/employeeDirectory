import React from "react";

function Card(props) {
    console.log(props)
    return (
        <React.Fragment>
            <h1>{props.name}</h1>
        </React.Fragment>
    )
} 

export default Card; 