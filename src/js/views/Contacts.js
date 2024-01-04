import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js"; //esto lo agregamos
import { Link } from "react-router-dom"; //esto todavia no lo hemos visto, mas adelante lo vamos a ver.

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});
	const { store, actions } = useContext(Context); //esto lo agregamos. Siempre va a ser asi.

	//esto lo agregamos
	useEffect(() => {
		actions.getAllContacts();
	}, []);
	console.log(store.contacts);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map(item => (
							<ContactCard
								key={item.id}
								full_name={item.full_name}
								address={item.address}
								onDelete={() => setState({ showModal: true })}
							/>
						))}
						{/* <ContactCard onDelete={() => setState({ showModal: true })} />
						<ContactCard />
						<ContactCard />
						<ContactCard /> */}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
