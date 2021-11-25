import React, { useState } from 'react';
import { MdSend } from 'react-icons/md';

import 'components/Input/styles.scss';

export const Input = () => {
	const [inputValue, setInputValue] = useState('');

	const handleSubmit = () => {
		if (!inputValue) return;

		setInputValue('');
	};

	return (
		<div className="form">
			<input
				className="input form__input"
				placeholder="Create a new todo"
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
			/>
			<MdSend className="form__send-icon" title="Form send icon" onClick={handleSubmit} />
		</div>
	);
};
