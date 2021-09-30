import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/Provider";

const ContactsContainer = () => {
	const context = useContext(GlobalContext);

	console.log(context);

	return (
		<div>
			<h1>Contacts</h1>
		</div>
	);
};

export default ContactsContainer;
