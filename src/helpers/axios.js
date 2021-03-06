import axios from "axios";

const baseURL = process.env.BACKEND_URL;

// console.log("Base Url", baseURL);

let headers = {};

if (localStorage.token) {
	headers.Authorization = "Bearer " + localStorage.token;
}

const axiosInstance = axios.create({
	baseUrl: baseURL,
	headers,
});

export default axiosInstance;
