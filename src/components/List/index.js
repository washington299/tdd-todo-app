import React from 'react';

import 'components/List/styles.scss';

export const List = ({ list = [] }) => {
	return (
		<section className="list" data-testid="list">
			{list.length > 0 ? (
				<ul>
					{list.map(({ id, name }) => (
						<li key={id}>{name}</li>
					))}
				</ul>
			) : (
				<p className="list__empty-message">List is empty</p>
			)}
		</section>
	);
};
