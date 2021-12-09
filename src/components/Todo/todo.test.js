import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Todo } from '.';

describe('<Todo />', () => {
	it('Should add a list item to the list when clicked in the input icon', () => {
		render(<Todo />);

		const listEmptyMessage = screen.getByText(/List is empty/i);

		fireEvent.change(screen.getByPlaceholderText(/Create a new todo/i), {
			target: { value: 'Wash the dishes' },
		});
		fireEvent.click(screen.getByTitle(/Form send icon/i));

		expect(listEmptyMessage).not.toBeInTheDocument();
		expect(screen.getByText(/Wash the dishes/i)).toBeInTheDocument();
	});
});
