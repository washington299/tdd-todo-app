import React, { useState } from 'react';

import { Header } from 'components/Header';
import { Input } from 'components/Input';
import { Content } from 'components/Content';

import 'components/Todo/styles.scss';

export const Todo = () => {
	// eslint-disable-next-line no-unused-vars
	const [list, setList] = useState([
		{
			id: 1,
			name: 'Wash the dishes',
			completed: false,
		},
		{
			id: 2,
			name: 'Wash the dishes Wash the dishes Wash the dishes',
			completed: false,
		},
		{
			id: 3,
			name: 'Wash the dishes',
			completed: false,
		},
	]);

	return (
		<main className="todo">
			<div className="container">
				<Header />
				<Input />
				<Content list={list} setList={setList} />
			</div>
		</main>
	);
};
