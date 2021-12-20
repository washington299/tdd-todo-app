import React, { useContext } from 'react';

import { ListContext } from 'contexts/list/context';

import 'components/Filters/styles.scss';

export const Filters = () => {
	const {
		state: { filter },
		dispatch,
	} = useContext(ListContext);

	const markActiveButton = name => {
		dispatch({ payload: { name: 'SET_FILTER', data: { filter: name } } });
	};

	return (
		<div className="filters">
			<button
				className={`filters__button ${filter === 'all' && 'active'}`}
				onClick={() => markActiveButton('all')}
			>
				All
			</button>
			<button
				className={`filters__button ${filter === 'active' && 'active'}`}
				onClick={() => markActiveButton('active')}
			>
				Active
			</button>
			<button
				className={`filters__button ${filter === 'completed' && 'active'}`}
				onClick={() => markActiveButton('completed')}
			>
				Completed
			</button>
		</div>
	);
};
