
function AccordionItem({item, index, onKeyDown, onClick, onFocus, children}) {
	return (
		<div className="accordion__item" key={item.id}>
			<div className="accordion__item__heading" aria-controls={"content-"+index} aria-expanded={item.expanded}
						onKeyDown={onKeyDown} tabIndex={0} onClick={onClick} onFocus={onFocus}>
				<h2 className="heading-2">{item.heading}</h2>
				{/* <img src={item.expanded ? minus : plus} /> */}
			</div>
			<div className="accordion__item__content" aria-hidden={!item.expanded} id={"content-"+index}>
				{children}
			</div>
		</div>
	)
}

export default AccordionItem