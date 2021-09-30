import { useState } from "react";

export default (e) => {
	const [form, setForm] = useState({});

	const onChange = (e, { name, value }) => {
		setForm({ ...form, [name]: value });
	};

	console.log(form);

	return { form, onChange };
};
