import React, { useState } from 'react';

import { Header } from 'components/Header';
import { Input } from 'components/Input';
import { Content } from 'components/Content';

import 'components/Todo/styles.scss';

export const Todo = () => {
	const [list, setList] = useState([]);

	return (
		<main className="todo">
			<div className="container">
				<Header />
				<Input list={list} setList={setList} />
				<Content list={list} setList={setList} />
			</div>
		</main>
	);
};
