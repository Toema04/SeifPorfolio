import "./home.css";
import Spaceman from "../../images/spaceman.png";
import Skills from "../skills/Skills";
import { ArrowCircleRight } from "@mui/icons-material";
// import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";
import Navbar from "../navbar/Navbar";
// import Navbar from "./component/navbar/Navbar";

const Home = () => {
	useEffect(() => {
		Aos.init({ duration: 2000, delay: 200 });
	}, []);

	// const [homeWidth, sethomeWidth] = useState(0);
	const home = useRef();

	// useEffect(() => {
	// 	sethomeWidth(home.current.scrollWidth - home.current.offsetWidth);
	// }, []);
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<div className="home" id="home">
				<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				<div className="homeContainer">
					<div ref={home} className="homecon">
						<div className="homeText">
							<button data-aos="fade-right">Welcome To my Portfolio</button>
							<h1 data-aos="fade-right" className="h1Text">
								He! I'm seif Front-End
							</h1>
							<p data-aos="fade-right">
								I'm Seif Toema i 18 years and i start learn programing for 1
								year and i learn languages to make me front end
							</p>
							<div data-aos="fade-right" className="two">
								<a href="#connect">let's connect</a>
								<ArrowCircleRight className="icon" />
							</div>
						</div>
						<div data-aos="fade-left" className="image">
							<img src={Spaceman} alt="" className="homeImage" />
						</div>
					</div>
					<Skills />
				</div>
			</div>
		</>
	);
};

export default Home;
