import React from 'react';

import 'components/List/styles.scss';

export const List = ({ list }) => {
	return (
		<>
			{list.length > 0 ? (
				<ul>
					{list.map(({ id, name }) => (
						<li key={id}>{name}</li>
					))}
				</ul>
			) : (
				<p className="list__empty-message">List is empty</p>
			)}
		</>
	);
};
