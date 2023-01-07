import React from "react";
import Router from "./Router";
import styles from "./App.module.css";

const App = () => {
	return (
		<main className={styles["main-wrapper"]}>
			<Router />
		</main>
	);
};

export default App;
