import React from "react";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";


export const CreatContact = () => {
    const {actions} = useContext(Context);
    const navigate = useNavigate();
    const [newContact, setNewContact] = useState({});
    return(
        <>
        <div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold" >Full Name</label>
                <input onChange={(event)=> setNewContact({...newContact, name: event.target.value})} value={newContact.name || ""} type="text" className="form-control" placeholder="Enter Full Name"/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email</label>
                <input onChange={(event)=> setNewContact({...newContact, email: event.target.value})} value={newContact.email || ""} className="form-control" placeholder="Email"/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold" >Phone</label>
                <input onChange={(event)=> setNewContact({...newContact, phone: event.target.value})} value={newContact.phone || ""} type="number" className="form-control" placeholder="Enter Phone Number"/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold" placeholder="Address">Address</label>
                <input onChange={(event)=> setNewContact({...newContact, address: event.target.value})} value={newContact.address || ""} type="text" className="form-control"/>
            </div>
          
            <button onClick={ async () =>{
            
            await actions.createContact(newContact)
            navigate(-1) 
            }} type="submit" className="btn btn-primary">Submit</button>
            <Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
        </div>

        </>
    )
}