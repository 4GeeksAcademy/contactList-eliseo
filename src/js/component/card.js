import React from "react";

export const ContactCard = (props) => {
    return(
        <div className="card mb-3" style={{"maxWidth": "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={"https://i.pravatar.cc/300"+"?u="+props.name} className="img-fluid rounded-circle" alt={props.name}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">Phone: {props.phone}</p>
                        <p className="card-text">Email: {props.email}</p> 
                        <p className="card-text">Address: {props.address}</p>  
                    </div>
                </div>
            </div>
        </div>
    )
};