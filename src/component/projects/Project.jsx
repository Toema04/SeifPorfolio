import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./project.css";

const Project = () => {
	const data = [
		{
			id: 1,
			title: "Crypto Currency Dashboard && Financial Visualization",
			image:
				"https://cdn.dribbble.com/users/463309/screenshots/9936700/media/e35e2f3b171fc57cc574fcc2a9b3ea68.jpg?compress=1&resize=400x300",
			githup: "http://githup.com",
			demo: "https://dribbble.com",
			data_aos: "fade-right",
		},
		{
			id: 2,
			title: "Charts templates & infographice in Figma",
			image:
				"https://cdn.dribbble.com/users/1200800/screenshots/11835214/media/7865540f11ec09a771102b0cc01e317b.jpg?compress=1&resize=768x576&vertical=top",
			githup: "http://githup.com",
			demo: "https://dribbble.com",
			data_aos: "flip-left",
		},
		{
			id: 3,
			title: "Figma dashboard UI git for data desing web apps",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1172fWSR6LptAQKNnOuuTzwD9Bldh4iKIpFwyMFG78RFFDRcr38XX_QbVjT98bUX--HI&usqp=CAU",
			githup: "http://githup.com",
			demo: "https://dribbble.com",
			data_aos: "fade-right",
		},
		{
			id: 4,
			title: "Maintaining tasks and traking progress",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgx6ZWLCgQq31GgWXXb8Ldvf3Z5X8PB24Z-iXiM70cZRABCvPPUVt0p9ZbZSmGRiD-SLE&usqp=CAU",
			githup: "http://githup.com",
			demo: "https://dribbble.com",
			data_aos: "fade-right",
		},
		{
			id: 5,
			title: "Charts templates & infographice in Figma",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRcA3zaN4wFRyWycEkD_DV8x4XKceiWfiMcF6zBd3ncr4nrr9PaalhkBzK58jVZPFEvHQ&usqp=CAU",
			githup: "http://githup.com",
			demo: "https://dribbble.com",
			data_aos: "flip-left",
		},
		{
			id: 6,
			title: "Charts templates & infographice in Figma",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQonFhDo50FoyHsAysnJZEauZb5HUJudImV_pE8bHIEbOgOVuwk43UnUSJsdkeUViagMn8&usqp=CAU",
			githup: "http://githup.com",
			demo: "https://dribbble.com",
			data_aos: "fade-right",
		},
	];

	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<>
			<div className="project" id="project">
				<div className="projectContainer">
					<div className="projectText">
						<h1>Projects</h1>
						<p></p>
					</div>

					<div className="box">
						{data.map(({ id, title, image, data_aos }) => (
							<div className="projectBox" key={id}>
								<div className="imageBox">
									<img data-aos={data_aos} className="img" src={image} alt="" />
									{/* <h3>{title}</h3> */}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Project;
