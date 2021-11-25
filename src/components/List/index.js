import React from 'react';

import 'components/List/styles.scss';

export const List = () => {
	return (
		<section className="list" data-testid="list">
			<p className="list__empty-message">List is empty</p>
		</section>
	);
};
