import React, { useState, useMemo } from "react";
import styles from "./Chat.module.css";
import { useUserContext } from "../../context/userContext";
import { BsFillChatLeftDotsFill } from "react-icons/bs";

const ChatBlock = ({ firstName, lastName, active, profile }) => {
	return (
		<li>
			<img src={profile} alt={firstName} />
			<span>
				{firstName} {lastName}
			</span>
			<div
				className={styles["badge"]}
				style={{ backgroundColor: active ? "green" : "gray" }}></div>
		</li>
	);
};

const Chat = () => {
	const [open, setOpen] = useState(false);
	const { users, loggedUser } = useUserContext();
	const usersList = useMemo(() => {
		return users
			.slice(0, 10)
			.filter((user) => user.id !== loggedUser.id)
			.map((user) => ({
				firstName: user.name.first,
				lastName: user.name.last,
				active: Math.random() > 0.5,
				id: user.id,
				profile: user?.picture?.large,
			}));
	}, [users]);

	return (
		<div className={styles["chat-wrapper"]}>
			<div
				className={styles["chat-block"]}
				style={{ maxHeight: open ? "420px" : "60px" }}>
				<button
					type="button"
					className={styles["chat-button"]}
					onClick={() => setOpen(!open)}>
					<BsFillChatLeftDotsFill size={20} />
					<span>Chats</span>
				</button>
				<ul>
					{usersList.map((userChat) => (
						<ChatBlock {...userChat} key={userChat.id} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default Chat;
