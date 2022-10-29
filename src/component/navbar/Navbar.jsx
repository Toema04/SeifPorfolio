import "./navbar.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Navbar = () => {
	return (
		<div>
			<div className="nav">
				<div className="container">
					<a href="/" className="a">
						PORTFOLIO
					</a>
					<ul>
						<li>
							<a href="#skills">Skills</a>
						</li>
						<li>
							<a href="#project">Projects</a>
						</li>
						<li>
							<a href="#connect">Connect</a>
						</li>
						<div className="icons">
							<FaLinkedinIn className="icon" />
							<FaFacebookF className="icon" />
							<BsInstagram className="icon" />
						</div>
						<a href="#connect" className="button">
							let's connect
						</a>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
