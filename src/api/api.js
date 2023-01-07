import axios from "axios";

const BASE_URL =
	"https://randomuser.me/api/?inc=picture,name,location,email,dob,phone&results=100";

const axiosInstance = axios.create({
	baseURL: BASE_URL,
});

export function fetchUsers() {
	return axiosInstance.get();
}
