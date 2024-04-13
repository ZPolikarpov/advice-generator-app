import img_dice from "./assets/images/icon-dice.svg"
import img_divider_large from "./assets/images/pattern-divider-desktop.svg"
import img_divider_small from "./assets/images/pattern-divider-mobile.svg"
import { useState, useEffect } from "react";

function ResponsiveImage () {
	return (
		<picture className="divider">
			<source
				media="(max-width: 425px)"
				srcSet={img_divider_small}
				sizes="425px"
			/>
			<source
				srcSet={img_divider_large}
				sizes="1280px"
			/>
			<img src={img_divider_large} />
		</picture>
	);
 }

function App() {
	const [advice, setAdvice] = useState("");

	function getNewAdvice() {
		fetch("https://api.adviceslip.com/advice")
			.then(res => res.json())
			.then(data => {
				setAdvice(data.slip);
			});
	}

	useEffect(() => {
		// API call to get random advice
		getNewAdvice()
	}, []);

	return (
		<>
			<main>
				<div className="container">
					<div className="card | text-center items-center">
						<h1 className="card__heading | letter-spacing-loose">advice #{advice.id}</h1>
						<p>“{advice.advice}”</p>
						{/* <img className="divider" src={img_divider_large} srcSet={`${img_divider_large}, ${img_divider_small}`} alt="A divider for better visualization" /> */}
						<ResponsiveImage />
						<button className="button | round" data-type="dice" onClick={getNewAdvice}>
							<img src={img_dice} alt="A dice meant to reroll the advice" />
						</button>
					</div>
				</div>
			</main>
		</>
  )
}

export default App
