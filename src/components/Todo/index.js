import React from 'react';

import { Header } from 'components/Header';
import { Input } from 'components/Input';
import { List } from 'components/List';

import 'components/Todo/styles.scss';

export const Todo = () => {
	return (
		<main className="todo">
			<div className="container">
				<Header />
				<Input />
				<List />
			</div>
		</main>
	);
};
