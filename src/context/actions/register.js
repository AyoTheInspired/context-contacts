import axiosInstance from "../../helpers/axios";

export const register = () => {
	axiosInstance
		.post("/auth/register")
		.then((result) => {
			console.log(result.data);
		})
		.catch((err) => {
			console.log(err);
		});
};
