import React from "react";
import "../../styles/home.css";
import { useContext, useState, useEffect } from "react";
import { ContactCard } from "../component/card";

import { Context } from "../store/appContext";


export const Home = () => {
	const {actions, store} = useContext(Context);

	return(
	<div className="text-center mt-5">
		{
			store.contacts.map((item, index)=>{
				return <ContactCard key={index} name={item.name} address={item.address} email={item.email} phone={item.phone}/>
			})
		}
	</div>
	)
};
