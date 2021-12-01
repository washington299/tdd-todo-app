import React from 'react';
import { render, screen } from '@testing-library/react';

import { Content } from '.';

describe('<Content />', () => {
	it('Should render list', () => {
		render(<Content />);

		const list = screen.getByTestId('list');

		expect(list).toBeInTheDocument();
	});

	it('Should show a message when list is empty', () => {
		render(<Content />);

		const emptyMessage = screen.getByText(/List is empty/i);

		expect(emptyMessage).toBeInTheDocument();
	});

	it('Should render list item if list is not empty', () => {
		const mockListItem = [
			{
				id: 1,
				name: 'Wash the dishes',
				completed: false,
			},
		];

		render(<Content list={mockListItem} />);

		const listItem = screen.getByText(/Wash the dishes/i);

		expect(listItem).toBeInTheDocument();
	});
});
