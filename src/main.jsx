import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Provider from "./context/userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider>
		<Router>
			<App />
		</Router>
	</Provider>
);
