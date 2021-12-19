import React from 'react';

import { Header, Input, Content, Filters } from 'components';

import 'components/Todo/styles.scss';

export const Todo = () => {
	return (
		<main className="todo">
			<div className="container">
				<Header />
				<Input />
				<Content />
				<Filters />
			</div>
		</main>
	);
};
