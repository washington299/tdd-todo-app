import React, { useContext } from 'react';

import { ListContext } from 'contexts/list/context';

import 'components/Footer/styles.scss';

export const Footer = () => {
	const {
		state: { list, filter },
		dispatch,
	} = useContext(ListContext);

	const listAllItems = list.filter(item => item);
	const listActiveItems = list.filter(item => item.completed === false);
	const listCompletedItems = list.filter(item => item.completed === true);

	const currentList =
		(filter === 'all' && listAllItems) ||
		(filter === 'active' && listActiveItems) ||
		(filter === 'completed' && listCompletedItems);

	const currentListLength = currentList.length;
	const itemWord = currentListLength > 1 ? 'items' : 'item';

	const clearCompletedItems = () => {
		const completedItemExist = list.filter(item => item.completed === true);

		if (completedItemExist.length === 0) return;

		dispatch({ payload: { name: 'CLEAR_COMPLETED_ITEMS' } });
	};

	return (
		<footer className="footer">
			<div className="footer__list-quantity">{`${currentListLength} ${itemWord} left`}</div>
			{filter === 'all' && (
				<button className="footer__clear-button" onClick={clearCompletedItems}>
					Clear completed
				</button>
			)}
		</footer>
	);
};
