import Home from "./component/home/Home";
import Project from "./component/projects/Project";
import "./app.css";
import Connect from "./component/connnect/Connect";
import Nav from "./component/nav/Nav";
import { useState } from "react";

function App() {
	return (
		<div className="app">
			<Home />
			<Nav />
			{/* <div className="section"> */}
			<Project />
			{/* </div> */}
			<Connect />
		</div>
	);
}

export default App;
