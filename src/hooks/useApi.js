import { useState, useEffect } from "react";
import { fetchUsers } from "../api/api";
import { v4 as uuidv4 } from "uuid";

export default function useApi() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getUsers = async () => {
			try {
				setError(null);
				const response = await fetchUsers();
				if (200 !== response.status) throw new Error("Something Went Wrong...");

				const { results } = response.data;
				const data = results.map((result) => ({ ...result, id: uuidv4() }));
				setUsers(data);
			} catch (error) {
				const message = new Error(error)?.message || "Failed To Fetch Users...";
				setError(message);
			} finally {
				setLoading(false);
			}
		};
		getUsers();
	}, []);

	return { users, loading, error };
}
