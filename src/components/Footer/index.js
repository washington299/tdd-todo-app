import React, { useState } from 'react';

import 'components/Footer/styles.scss';

export const Footer = ({ listQuantity = 0 }) => {
	const [toggleCompletedItems, setToggleCompletedItems] = useState(false);

	const itemWord = listQuantity > 1 ? 'items' : 'item';

	return (
		<footer className="footer">
			<div className="footer__list-quantity">{`${listQuantity} ${itemWord} left`}</div>
			<button
				className="footer__clear-button"
				onClick={() => setToggleCompletedItems(!toggleCompletedItems)}
			>
				{toggleCompletedItems ? 'Show completed' : 'Clear completed'}
			</button>
		</footer>
	);
};
