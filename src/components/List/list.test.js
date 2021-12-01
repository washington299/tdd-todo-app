import React from 'react';
import { render, screen } from '@testing-library/react';

import { List } from '.';

describe('<List />', () => {
	it('Should show a message when list is empty', () => {
		render(<List list={[]} />);

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

		render(<List list={mockListItem} />);

		const listItem = screen.getByText(/Wash the dishes/i);

		expect(listItem).toBeInTheDocument();
	});
});
