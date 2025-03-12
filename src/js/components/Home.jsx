import React from "react";
import Navbar from "./Navbar/Navbar.jsx"
import Jumbotron from "./Jumbotron/Jumbotron.jsx"
import Card from "./Card/Card.jsx";
import Inferior from "./Inferior/Inferior.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="container d-flex justify-content-center">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<div className="conteiner-fuid">
				<Inferior />
			</div>
		</div>
	);
};

export default Home;