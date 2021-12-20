import React, { useContext } from 'react';

import { ListContext } from 'contexts/list/context';

import 'components/List/styles.scss';

export const List = () => {
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

	const toggleItem = index => {
		dispatch({ payload: { name: 'TOGGLE_ITEM', data: { index } } });
	};

	const deleteItem = id => {
		dispatch({ payload: { name: 'DELETE_ITEM', data: { id } } });
	};

	const sortByHighId = (a, b) => b.id - a.id;

	return (
		<div className="list">
			{currentList?.length > 0 ? (
				<ul>
					{currentList.sort(sortByHighId).map(({ id, name, completed }, index) => (
						<li key={id} className="list__item">
							{completed ? (
								<div className="list__left-content">
									<div
										className="list__checkbox checked"
										data-testid="checked"
										onClick={() => toggleItem(index)}
									>
										<img
											src="/images/icon-check.svg"
											alt="checked icon"
											className="list__check-icon"
										/>
									</div>
									<del className="list__name name-checked">{name}</del>
								</div>
							) : (
								<div className="list__left-content">
									<div
										className="list__checkbox"
										data-testid="unchecked"
										onClick={() => toggleItem(index)}
									/>
									<span className="list__name" data-testid="list item name">
										{name}
									</span>
								</div>
							)}
							<img
								src="/images/icon-cross.svg"
								alt="Close icon"
								className="list__close-icon"
								onClick={() => deleteItem(id)}
							/>
						</li>
					))}
				</ul>
			) : (
				<p className="list__empty-message">List is empty</p>
			)}
		</div>
	);
};
