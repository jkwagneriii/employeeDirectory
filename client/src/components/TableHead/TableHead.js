import React from "react";

function TableHead(props) {
    
    return (
        <React.Fragment>
            <div className="container card">
                <div className="row">
                    <div className="col-sm">
                        <h3>IMAGE</h3>
                    </div>
                    <div className="col-sm">
                        <h3 onClick={props.sortName()}>NAME</h3>
                    </div>
                    <div className="col-sm">
                        <h3>PHONE</h3>
                    </div>
                    <div className="col-sm">
                        <h3>EMAIL</h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
} 


export default TableHead; 