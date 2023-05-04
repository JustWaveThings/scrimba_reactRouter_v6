import React from 'react';
import '../index.css';
import '../meyer.css';

function About() {
	return (
		<div className="test about">
			<div className="hero-img">
				<img
					src="/scrimba_react_router_v6/public/person_on_top_of_van.png"
					alt="person on top of camper van at night"
				/>
			</div>
			<main>
				<header>Don’t squeeze in a sedan when you could relax in a van.</header>
				<p>
					Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before
					each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
				</p>
				<p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
			</main>
			<div className="cta-cont-about">
				<div className="cta-text-about">Your destination is waiting. Your van is ready.</div>
				<button className="cta-text-button">Explore our vans</button>
			</div>
		</div>
	);
}

export default About;
