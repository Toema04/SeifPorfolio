// const me = (document.getElementById("nav").style.display = "block");
import "./nav.css";
import { Chat, Home, LibraryBooks, PersonPin } from "@mui/icons-material";
import { useState, useEffect } from "react";

const Nav = () => {
	const [active, setActive] = useState("");
	// const [seif, setSeif] = useState(false);

	// useEffect(() => {
	// 	window.addEventListener("scroll", () => {
	// 		if (window.scrollY > 60) {
	// 			setSeif(true);
	// 		} else {
	// 			setSeif(false);
	// 		}
	// 	});
	// }, []);

	return (
		// {seif && (
		<nav id="nav">
			<a
				href="#home"
				className={active === "#home" ? "active" : ""}
				onClick={() => setActive("#home")}
			>
				<Home className="Icon" />
			</a>
			<a
				href="#skills"
				className={active === "#skills" ? "active" : ""}
				onClick={() => setActive("#skills")}
			>
				<LibraryBooks className="Icon" />
			</a>
			<a
				href="#project"
				className={active === "#project" ? "active" : ""}
				onClick={() => setActive("#project")}
			>
				<PersonPin className="Icon" />
			</a>
			<a
				href="#connect"
				className={active === "#connect" ? "active" : ""}
				onClick={() => setActive("#connect")}
			>
				<Chat className="Icon" />
			</a>
		</nav>
		// 	);
		// }
	);
};

export default Nav;
