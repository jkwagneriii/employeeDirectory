import React from "react";
import './Card.css';

function Card(props) {

    
    return (
        <React.Fragment>
            <div className="container card">
                <div className="row">
                    <div className="col-sm">
                        <img src={props.image}></img>
                    </div>
                    <div className="col-sm">
                        {props.name}
                    </div>
                    <div className="col-sm">
                        {props.cell}
                    </div>
                    <div className="col-sm">
                        {props.email}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
} 


export default Card; 