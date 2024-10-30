const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contactToEdit: null // Store the contact to be edited
		},
		actions: {
			getContacts: async () => {
				const resp = await fetch(process.env.BACKEND_URL + "agendas/eliseo/");
				const data = await resp.json();
				setStore({ contacts: data.contacts || data });
			},
			createContact: async (newContact) => {
				const resp = await fetch(process.env.BACKEND_URL + "agendas/eliseo/contacts", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(newContact)
				});
				if (resp.ok) {
					await getActions().getContacts();
				}
			},
			editContact: async (updatedContact) => {
				await fetch(process.env.BACKEND_URL + `agendas/eliseo/contacts/${updatedContact.id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(updatedContact)
				});
				getActions().getContacts();
			},
			deleteContact: async (id) => {
				await fetch(process.env.BACKEND_URL + `agendas/eliseo/contacts/${id}`, { method: "DELETE" });
				getActions().getContacts();
			},
			setContactToEdit: (contact) => {
				setStore({ contactToEdit: contact });
			},
			clearContactToEdit: () => {
				setStore({ contactToEdit: null });
			}
		}
	};
};

export default getState;
