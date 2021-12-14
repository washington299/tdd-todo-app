import React, { useContext } from 'react';

import { ListContext } from 'contexts/list/context';

import 'components/List/styles.scss';

export const List = () => {
	const { state, dispatch } = useContext(ListContext);

	const checkItem = index => {
		dispatch({ payload: { name: 'CHECK_ITEM', data: { index } } });
	};

	const uncheckItem = index => {
		dispatch({ payload: { name: 'UNCHECK_ITEM', data: { index } } });
	};

	const deleteItem = id => {
		dispatch({ payload: { name: 'DELETE_ITEM', data: { id } } });
	};

	const sortByHighId = (a, b) => b.id - a.id;

	return (
		<ul className="list">
			{state?.length > 0 ? (
				<>
					{state.sort(sortByHighId).map(({ id, name, completed }, index) => (
						<li key={id} className="list__item">
							{completed ? (
								<div className="list__left-content">
									<div
										className="list__checkbox checked"
										data-testid="checked"
										onClick={() => uncheckItem(index)}
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
										onClick={() => checkItem(index)}
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
				</>
			) : (
				<p className="list__empty-message">List is empty</p>
			)}
		</ul>
	);
};
