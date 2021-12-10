import React, { useState } from 'react';

import 'components/Filters/styles.scss';

export const Filters = () => {
	const [activeButton, setActiveButton] = useState('all');

	const markActiveButton = name => {
		setActiveButton(name);
	};

	return (
		<section className="filters">
			<button
				className={`filters__button ${activeButton === 'all' && 'active'}`}
				onClick={() => markActiveButton('all')}
			>
				All
			</button>
			<button
				className={`filters__button ${activeButton === 'active' && 'active'}`}
				onClick={() => markActiveButton('active')}
			>
				Active
			</button>
			<button
				className={`filters__button ${activeButton === 'completed' && 'active'}`}
				onClick={() => markActiveButton('completed')}
			>
				Completed
			</button>
		</section>
	);
};
