import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import { Outlet } from "react-router-dom";
import { Sidebar, Header } from "../../components";

const Dashboard = () => {
	const [activeRoute, setActiveRoute] = useState("Profile");

	return (
		<section className={styles["dashboard-wrapper"]}>
			<Sidebar setActiveRoute={setActiveRoute} />
			<Header activeRoute={activeRoute} />
			<Outlet />
		</section>
	);
};

export default Dashboard;
