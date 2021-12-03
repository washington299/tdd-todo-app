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

	return (
		<ul className="list">
			{list.length > 0 ? (
				<>
					{list.map(({ id, name, completed }, index) => (
						<li key={id} className="list__item">
							<div className="list__left-content">
								{completed ? (
									<div data-testid="checked">checked</div>
								) : (
									<div
										className="list__checked"
										data-testid="unchecked"
										onClick={() => checkItem(index)}
									/>
								)}
								<span className="list__name">{name}</span>
							</div>
							<img src="/images/icon-cross.svg" alt="Close icon" className="list__close-icon" />
						</li>
					))}
				</>
			) : (
				<p className="list__empty-message">List is empty</p>
			)}
		</ul>
	);
};
