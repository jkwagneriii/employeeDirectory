import React from "react";

function Card(props) {
    
    return (
        <React.Fragment>
            <div className="container card">
                <div className="row">
                    <div className="col-sm">
                        IMAGE
                    </div>
                    <div className="col-sm">
                        NAME
                    </div>
                    <div className="col-sm">
                        EMAIL
                    </div>
                    <div className="col-sm">
                        PHONE
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
} 


export default Card; 