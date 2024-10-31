const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contactToEdit: null // Store the contact to be edited
		},
		actions: {
			// Checks if the agenda exists and creates it if it doesn't
			initializeAgenda: async () => {
				const slug = "eliseo";
				const agendaUrl = `${process.env.BACKEND_URL}agendas/${slug}`;

				try {
					// Check if the agenda exists
					const response = await fetch(agendaUrl);

					// If it doesn't exist, create it
					if (response.status === 404) {
						const createResponse = await fetch(agendaUrl, {
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({ slug }),
						});

						if (createResponse.ok) {
							console.log("Agenda 'eliseo' created successfully.");
						} else {
							console.error("Failed to create agenda.");
						}
					} else if (!response.ok) {
						console.error("Error checking agenda existence:", response.statusText);
					}
				} catch (error) {
					console.error("Error initializing agenda:", error);
				}
			},

			// Fetches contacts after ensuring the agenda exists
			getContacts: async () => {
				await getActions().initializeAgenda(); // Ensure agenda exists before fetching
				const resp = await fetch(`${process.env.BACKEND_URL}agendas/eliseo/`);
				const data = await resp.json();
				setStore({ contacts: data.contacts || data });
			},

			createContact: async (newContact) => {
				const resp = await fetch(`${process.env.BACKEND_URL}agendas/eliseo/contacts`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(newContact),
				});
				if (resp.ok) {
					await getActions().getContacts();
				}
			},

			editContact: async (updatedContact) => {
				await fetch(`${process.env.BACKEND_URL}agendas/eliseo/contacts/${updatedContact.id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(updatedContact),
				});
				getActions().getContacts();
			},

			deleteContact: async (id) => {
				await fetch(`${process.env.BACKEND_URL}agendas/eliseo/contacts/${id}`, { method: "DELETE" });
				getActions().getContacts();
			},

			setContactToEdit: (contact) => {
				setStore({ contactToEdit: contact });
			},

			clearContactToEdit: () => {
				setStore({ contactToEdit: null });
			},
		}
	};
};

export default getState;
