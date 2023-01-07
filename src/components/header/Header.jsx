import React from "react";
import styles from "./Header.module.css";
import { useUserContext } from "../../context/userContext";

const Header = ({ activeRoute }) => {
	const { loggedUser } = useUserContext();

	const {
		picture: { large },
		name: { first, last },
	} = loggedUser;
	const fullName = `${first} ${last}`;
	return (
		<header className={styles["header-wrapper"]}>
			<h2>{activeRoute}</h2>
			<div className={styles["profile-wrapper"]}>
				<img src={large} alt={fullName} />
				<span>{fullName}</span>
			</div>
		</header>
	);
};

export default Header;
