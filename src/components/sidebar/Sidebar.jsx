import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

const activeClass = `${styles["sidebar-nav-link"]} ${styles["sidebar-nav-link-active"]}`;
const inactiveClass = styles["sidebar-nav-link"];

const Sidebar = ({ setActiveRoute }) => {
	const [transform, setTransform] = useState(0);

	const handleClick = (t, routeName) => {
		setTransform(t);
		setActiveRoute(routeName);
	};

	return (
		<aside className={styles["sidebar"]}>
			<nav className={styles["sidebar-nav"]}>
				<div
					className={styles["indicator"]}
					style={{ top: `calc(${transform}% + 13px)` }}>
					<span>&rarr;</span>
				</div>
				<NavLink
					onClick={() => handleClick(0, "Profile")}
					className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
					to="/dashboard/profile">
					Profile
				</NavLink>
				<NavLink
					onClick={() => handleClick(25, "Posts")}
					className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
					to="/dashboard/posts">
					Posts
				</NavLink>
				<NavLink
					onClick={() => handleClick(50, "Gallery")}
					className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
					to="/dashboard/gallery">
					Gallery
				</NavLink>
				<NavLink
					onClick={() => handleClick(75, "Todo")}
					className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
					to="/dashboard/todo">
					Todo
				</NavLink>
			</nav>
		</aside>
	);
};

export default Sidebar;
