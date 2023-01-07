import React from "react";
import styles from "./Home.module.css";
import { Card, Loading, Error } from "../../components";
import { useUserContext } from "../../context/userContext";

const Home = () => {
	const { users, loading, error } = useUserContext();

	return (
		<section className={styles["home-wrapper"]}>
			<div className={styles["bg"]}></div>
			{loading && !error ? <Loading /> : null}
			{error && !loading ? <Error error={error} /> : null}
			{!!users?.length ? <Card /> : null}
		</section>
	);
};

export default Home;
