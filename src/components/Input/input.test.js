import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { ListContextProvider } from 'contexts/list/context';

import { Input } from '.';

const MockInputComponent = () => {
	return (
		<ListContextProvider>
			<Input />
		</ListContextProvider>
	);
};

describe('<Input />', () => {
	it('render form input', () => {
		render(<MockInputComponent />);

		expect(screen.getByPlaceholderText(/Create a new todo/i)).toBeInTheDocument();
		expect(screen.getByTitle(/Form send icon/i)).toBeInTheDocument();
	});

	it('ensure input has correct value', () => {
		render(<MockInputComponent />);

		const input = screen.getByPlaceholderText(/Create a new todo/i);

		fireEvent.change(input, { target: { value: 'finish homework' } });

		expect(input.value).toBe('finish homework');
	});

	it('clear input if send icon is clicked and input has some value', async () => {
		render(<MockInputComponent />);

		const input = screen.getByPlaceholderText(/Create a new todo/i);
		const formIcon = screen.getByTitle(/Form send icon/i);

		fireEvent.change(input, { target: { value: 'finish homework' } });
		fireEvent.click(formIcon);

		expect(input.value).toBe('');
	});
});
