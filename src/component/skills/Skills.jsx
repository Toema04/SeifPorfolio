import { GradientCircularProgress } from "react-circular-gradient-progress";
import "./skills.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Skills = () => {
	const percentage = 80;
	const seif = 90;
	const moh = 75;
	const me = 90;

	const [width, setWidth] = useState(0);
	const featured = useRef();

	useEffect(() => {
		console.log(featured.current.scrollWidth, featured.current.offsetWidth);
		setWidth(featured.current.scrollWidth - featured.current.offsetWidth);
	}, []);

	return (
		<>
			<div className="skill" id="skills">
				<div className="skillBox">
					<h1>skills</h1>
					<motion.div ref={featured} className="featured">
						<motion.div
							drag="x"
							dragConstraints={{ right: 0, left: -width }}
							// -230
							className="featuredIcons"
						>
							<div className="IconsWithWord">
								<GradientCircularProgress
									progress={`${percentage}`}
									size="150"
									text={`${percentage}%`}
									startColor="#1d2671"
									middleColor="#c33764"
									endColor="#1d2671"
								/>
								<span className="FrameWord">Html</span>
							</div>
							<div className="IconsWithWord">
								<GradientCircularProgress
									progress={seif}
									size="150"
									text={`${seif}%`}
									startColor="#1d2671"
									middleColor="#c33764"
									endColor="#1d2671"
								/>
								<span className="FrameWord">Css</span>
							</div>
							<div className="IconsWithWord">
								<GradientCircularProgress
									progress={moh}
									size="150"
									text={`${moh}%`}
									startColor="#1d2671"
									middleColor="#c33764"
									endColor="#1d2671"
								/>
								<span className="FrameWord">JavaScript</span>
							</div>
							<div className="IconsWithWord">
								<GradientCircularProgress
									progress={moh}
									size="150"
									text={`${moh}%`}
									startColor="#1d2671"
									middleColor="#c33764"
									endColor="#1d2671"
								/>
								<span className="FrameWord">Sass</span>
							</div>
							<div className="IconsWithWord">
								<GradientCircularProgress
									progress={me}
									size="150"
									text={`${me}%`}
									startColor="#1d2671"
									middleColor="#c33764"
									endColor="#1d2671"
								/>
								<span className="FrameWord">React</span>
							</div>
							{/* <motion.div className="span">
								
								<span className="span2">Css</span>
								<span className="span3">JavaScript</span>
								<span className="span4">JavaScript</span>
								<span className="span5">JavaScript</span>
							</motion.div> */}
						</motion.div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Skills;
