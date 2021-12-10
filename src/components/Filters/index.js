import React from 'react';

import 'components/Filters/styles.scss';

export const Filters = () => {
	return (
		<section className="filters">
			<button className="filters__button">All</button>
			<button className="filters__button">Active</button>
			<button className="filters__button">Completed</button>
		</section>
	);
};
