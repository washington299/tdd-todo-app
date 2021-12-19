import React, { useState, useContext } from 'react';
import { MdSend } from 'react-icons/md';

import { ListContext } from 'contexts/list/context';

import 'components/Input/styles.scss';

export const Input = () => {
	const [inputValue, setInputValue] = useState('');

	const {
		state: { filter },
		dispatch,
	} = useContext(ListContext);

	const handleSubmit = () => {
		if (!inputValue) return;

		dispatch({ payload: { name: 'ADD_ITEM', data: { item: inputValue } } });
		setInputValue('');
	};

	return (
		<>
			{filter === 'all' && (
				<div className="form">
					<input
						className="input form__input"
						placeholder="Create a new todo"
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
					/>
					<MdSend className="form__send-icon" title="Form send icon" onClick={handleSubmit} />
				</div>
			)}
		</>
	);
};
