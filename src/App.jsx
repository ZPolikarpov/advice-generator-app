import img_dice from "./assets/images/icon-dice.svg"
import img_divider_large from "./assets/images/pattern-divider-desktop.svg"
import img_divider_small from "./assets/images/pattern-divider-mobile.svg"

function App() {
	return (
		<>
			<main>
				<div className="container">
					<div className="card | text-center">
						<h1 className="card__heading | letter-spacing-loose">Test Heading</h1>
						<p>Test Advice</p>
						<img src={img_divider_large} alt="A divider for better visualization" />
						<button className="button | round" data-type="dice">
							<img src={img_dice} alt="A dice meant to reroll the advice" />
						</button>
					</div>
				</div>
			</main>
		</>
  )
}

export default App
