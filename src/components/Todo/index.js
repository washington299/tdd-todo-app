import React from 'react';

import { Header } from 'components/Header';

import 'components/Todo/styles.scss';

export const Todo = () => {
	return (
		<main className="todo">
			<div className="container">
				<Header />
			</div>
		</main>
	);
};
