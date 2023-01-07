import React from "react";
import styles from "./Card.module.css";
import { useUserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const CardItem = ({ user, handleSetLoggedUser }) => {
	const navigate = useNavigate();

	const { large } = user?.picture;

	const fullName = `${user?.name?.first} ${user?.name?.last}`;

	const handleClick = () => {
		handleSetLoggedUser(user);
		navigate("/dashboard/profile", { replace: true });
	};
	return (
		<li className={styles["card-list-item"]} onClick={handleClick}>
			<img src={large} alt={fullName} />
			<span>{fullName}</span>
		</li>
	);
};

const Card = () => {
	const { users, handleSetLoggedUser } = useUserContext();

	return (
		<article className={styles["card-wrapper"]}>
			<header>Select an account</header>
			<ul className={styles["card-list"]}>
				{users.map((user) => (
					<CardItem
						key={user.id}
						user={user}
						handleSetLoggedUser={handleSetLoggedUser}
					/>
				))}
			</ul>
		</article>
	);
};

export default Card;
