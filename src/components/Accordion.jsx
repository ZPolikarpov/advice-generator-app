import { useState } from "react";
import AccordionItem from "./AccordionItem";

const arAccordeonItems = [
	{
		id: 0,
		heading: "What is Frontend Mentor, and how will it help me?",
		expanded: true,
		content: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
	},
	{
		id: 1,
		heading: "Is Frontend Mentor free?",
		expanded: false,
		content: "Absolutely! Frontend Mentor is your free gateway to web development mastery, offering a treasure trove of projects and resources."
	},
	{
		id: 2,
		heading: "Can I use Frontend Mentor projects in my portfolio?",
		expanded: false,
		content: "Showcase your brilliance! Frontend Mentor projects are not just free, but also yours to proudly flaunt in your dazzling portfolio."
	},
	{
		id: 3,
		heading: "How can I get help if I'm stuck on a challenge?",
		expanded: false,
		content: "Stuck? Fear not! Dive into a supportive community, mentorship, and detailed solutions at Frontend Mentor. Conquer challenges and thrive!"
	},
]

function Accordion() {
	const [items, setItems] = useState(() => arAccordeonItems)
  const [cursor, setCursor] = useState(() => 0);
	
	function handleExpand(id) {
		setCursor(id)
		setItems(items.map(item => {
			if (item.id === id) {
				return {...item, expanded: !item.expanded}
			} else {
				return item
			}
		}))
	}

	function handleKeyPress(event) {
		switch (event.code) {
			// case "ArrowDown":
			// 	setCursor(prevState =>
			// 		prevState < items.length - 1 ? prevState + 1 : prevState
			// 		);
			// 	break;
			// case "ArrowUp":
			// 	setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
			// 	break;
			// case "Tab":
			// 	if (event.shiftKey) {
			// 		setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
			// 	} else {
			// 		setCursor(prevState =>
			// 			prevState < items.length - 1 ? prevState + 1 : prevState
			// 		);
			// 	}
			// 	break;
			case "NumpadEnter":
			case "Enter":
			case "Space":
				handleExpand(cursor)
				break;
			default:
				break;
		}
	}

	return (
		<div className="accordion">
			{items.map((item, index) => (
				<AccordionItem key={index} item={item} index={index} onKeyDown={handleKeyPress} onClick={() => handleExpand(index)} onFocus={() => setCursor(index)}>
					<p>{item.content}</p>
				</AccordionItem>
			))}

		</div>
	)
}

export default Accordion