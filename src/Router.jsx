import { Routes, Route, useNavigate } from "react-router-dom";
import { Home, Gallery, Posts, Todo, Profile, Dashboard } from "./pages";

import { useUserContext } from "./context/userContext";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();
	const { loggedUser } = useUserContext();
	useEffect(() => {
		if (!loggedUser) navigate("/");
	}, [loggedUser]);
	return loggedUser ? children : null;
};

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route
				path="/dashboard"
				element={
					<ProtectedRoute>
						<Dashboard />
					</ProtectedRoute>
				}>
				<Route path="profile" index element={<Profile />} />
				<Route path="gallery" element={<Gallery />} />
				<Route path="posts" element={<Posts />} />
				<Route path="todo" element={<Todo />} />
			</Route>
		</Routes>
	);
};

export default Router;
