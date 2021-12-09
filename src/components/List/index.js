import React from 'react';

import 'components/List/styles.scss';

export const List = ({ list, setList }) => {
	const checkItem = index => {
		const newList = [...list];

		newList[index] = {
			...newList[index],
			completed: true,
		};

		setList(newList);
	};

	const uncheckItem = index => {
		const newList = [...list];

		newList[index] = {
			...newList[index],
			completed: false,
		};

		setList(newList);
	};

	const deleteItem = id => {
		const listWithDeletedItem = list.filter(item => item.id !== id);

		setList(listWithDeletedItem);
	};

	const sortByHighId = (a, b) => b.id - a.id;

	return (
		<ul className="list">
			{list.length > 0 ? (
				<>
					{list.sort(sortByHighId).map(({ id, name, completed }, index) => (
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
