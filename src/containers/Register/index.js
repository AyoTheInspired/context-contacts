import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { register } from "../../context/actions/auth/register";
import RegisterUI from "../../layout/RegisterUI";
import useForm from "./useForm";

const RegisterContainer = () => {
	useEffect(() => {
		// register();
	}, []);

	return <RegisterUI form={useForm()} />;
};

export default RegisterContainer;
