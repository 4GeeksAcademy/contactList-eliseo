import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const CreatContact = () => {
    const { actions, store } = useContext(Context);
    const navigate = useNavigate();
    const [contact, setContact] = useState(store.contactToEdit || {});

    useEffect(() => {
        if (store.contactToEdit) {
            setContact(store.contactToEdit);
        }
    }, [store.contactToEdit]);

    const handleSubmit = async () => {
        if (contact.id) {
            await actions.editContact(contact);
        } else {
            await actions.createContact(contact);
        }
        actions.clearContactToEdit();
        navigate("/");
    };

    return (
        <div>
            <div className="mb-3">
                <label className="form-label fw-bold">Full Name</label>
                <input onChange={(e) => setContact({ ...contact, name: e.target.value })} value={contact.name || ""} type="text" className="form-control" placeholder="Enter Full Name" />
            </div>

            <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input onChange={(e) => setContact({ ...contact, email: e.target.value })} value={contact.email || ""} type="email" className="form-control" placeholder="Email" />
            </div>

            <div className="mb-3">
                <label className="form-label fw-bold">Phone</label>
                <input onChange={(e) => setContact({ ...contact, phone: e.target.value })} value={contact.phone || ""} type="number" className="form-control" placeholder="Enter Phone Number" />
            </div>

            <div className="mb-3">
                <label className="form-label fw-bold">Address</label>
                <input onChange={(e) => setContact({ ...contact, address: e.target.value })} value={contact.address || ""} type="text" className="form-control" />
            </div>

            <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>

            <Link to="/">
                <button onClick={() => actions.clearContactToEdit()} className="btn btn-secondary ms-2">Back home</button>
            </Link>
        </div>
    );
};
