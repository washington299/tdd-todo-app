import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Input } from '.';

describe('<Input />', () => {
	it('render form input', () => {
		render(<Input />);

		const input = screen.getByPlaceholderText(/Create a new todo/i);
		const formIcon = screen.getByTitle(/Form send icon/i);

		expect(input).toBeInTheDocument();
		expect(formIcon).toBeInTheDocument();
	});

	it('ensure input has correct value', () => {
		render(<Input />);

		const input = screen.getByPlaceholderText(/Create a new todo/i);

		fireEvent.change(input, { target: { value: 'finish homework' } });

		expect(input.value).toBe('finish homework');
	});

	it('clear input if send icon is clicked and input has some value', async () => {
		render(<Input />);

		const input = screen.getByPlaceholderText(/Create a new todo/i);
		const formIcon = screen.getByTitle(/Form send icon/i);

		fireEvent.change(input, { target: { value: 'finish homework' } });
		fireEvent.click(formIcon);

		expect(input.value).toBe('');
	});
});
