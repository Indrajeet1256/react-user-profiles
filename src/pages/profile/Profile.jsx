import React from "react";
import { useUserContext } from "../../context/userContext";
import styles from "./Profile.module.css";
import Map from "../../components/map/Map";
import { Chat } from "../../components";
const Profile = () => {
	const { loggedUser } = useUserContext();

	console.log(loggedUser);

	const {
		picture: { large },
		name: { first, last },
		email,
		phone,
		dob: { date, age },
		location: {
			coordinates: { latitude, longitude },
			city,
			country,
			state,
			street: { number, name },
		},
	} = loggedUser;
	const fullName = `${first} ${last}`;

	return (
		<article className={styles["profile-wrapper"]}>
			<div className={styles["profile-details"]}>
				<div className={styles["profile-image-wrapper"]}>
					<img src={large} alt={fullName} />
					<h2>{fullName}</h2>
				</div>
				<div className={styles["basic-details"]}>
					<ul>
						<label>Personal Details</label>
						<li>
							<strong>Username:</strong>
							<span>{first}</span>
						</li>
						<li>
							<strong>Email: </strong>
							<span>{email}</span>
						</li>
						<li>
							<strong>Phone:</strong>
							<span>{phone}</span>
						</li>
						<li>
							<strong>DOB:</strong>
							<span>{date}</span>
						</li>
						<li>
							<strong>Age:</strong>
							<span>{age}</span>
						</li>
					</ul>
					<hr />
					<ul>
						<label>Company</label>
						<li>
							<strong>Name:</strong>
							<span>Romaguera-Crona</span>
						</li>
						<li>
							<strong>Catchphrase:</strong>
							<span>Multi-layered client-server neural</span>
						</li>
						<li>
							<strong>Bs:</strong>
							<span>harness real-time e-markets</span>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles["map"]}>
				<div className={styles["address-details"]}>
					<h2>Address:</h2>
					<p>
						<strong>Street:</strong>
						<span>{name}</span>
					</p>
					<p>
						<strong>City:</strong>
						<span>{city}</span>
					</p>
					<p>
						<strong>Country:</strong>
						<span>{country}</span>
					</p>
					<p>
						<strong>State:</strong>
						<span>{state}</span>
					</p>
				</div>
				<Map lat={latitude} lng={longitude} />
			</div>
			<Chat />
		</article>
	);
};

export default Profile;
