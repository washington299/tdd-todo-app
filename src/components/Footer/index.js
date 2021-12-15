import React, { useContext } from 'react';

import { ListContext } from 'contexts/list/context';

import 'components/Footer/styles.scss';

export const Footer = () => {
	const {
		state: { list },
		dispatch,
	} = useContext(ListContext);

	const listQuantity = list?.length;
	const itemWord = listQuantity > 1 ? 'items' : 'item';

	const clearCompletedItems = () => {
		const completedItemExist = list.filter(item => item.completed === true);

		if (completedItemExist.length === 0) return;

		dispatch({ payload: { name: 'CLEAR_COMPLETED_ITEMS' } });
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
