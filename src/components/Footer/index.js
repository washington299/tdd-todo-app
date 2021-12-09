import React from 'react';

import 'components/Footer/styles.scss';

export const Footer = ({ listQuantity = 0, list, setList }) => {
	const itemWord = listQuantity > 1 ? 'items' : 'item';

	const clearCompletedItems = () => {
		const clearCompletedList = list.filter(item => item.completed === false);

		setList(clearCompletedList);
	};

	return (
		<footer className="footer">
			<div className="footer__list-quantity">{`${listQuantity} ${itemWord} left`}</div>
			<button className="footer__clear-button" onClick={clearCompletedItems}>
				Clear completed
			</button>
		</footer>
	);
};
