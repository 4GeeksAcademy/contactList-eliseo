import React, { useContext } from "react";
import "../../styles/home.css";
import { ContactCard } from "../component/card";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const { actions, store } = useContext(Context);
	const navigate = useNavigate();

	return (
		<div className="text-center mt-5">
			{store.contacts.map((item, index) => {
				return (
					<ContactCard
						key={index}
						id={item.id}
						name={item.name}
						address={item.address}
						email={item.email}
						phone={item.phone}
						onEdit={() => {
							actions.setContactToEdit(item);
							navigate("/create");
						}}
						onDelete={() => actions.deleteContact(item.id)}
					/>
				);
			})}
		</div>
	);
};
