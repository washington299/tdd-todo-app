import React from 'react';

import { Header } from 'components/Header';
import { Input } from 'components/Input';
import { Content } from 'components/Content';
import { Filters } from 'components/Filters';

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
