import React from "react";

export const ContactCard = (props) => {
    // Unique image URL for each contact
    const uniqueImgUrl = `https://i.pravatar.cc/300?u=${props.id || Date.now()}`;

    return (
        <div className="card mb-3 mx-auto" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={uniqueImgUrl} className="img-fluid rounded-circle" alt={props.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">Phone: {props.phone}</p>
                        <p className="card-text">Email: {props.email}</p>
                        <p className="card-text">Address: {props.address}</p>

                        <div className="d-flex justify-content-end">
                            {/* Edit Button */}
                            <button
                                className="btn btn-warning"
                                onClick={() => props.onEdit(props.id)}
                            >
                                Edit
                            </button>

                            {/* Delete Button */}
                            <button
                                className="btn btn-danger ms-2"
                                onClick={() => props.onDelete(props.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
