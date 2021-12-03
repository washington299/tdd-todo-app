import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { List } from '.';

const MockComponent = () => {
	const [list, setList] = useState([
		{
			id: 1,
			name: 'Wash the dishes',
			completed: false,
		},
	]);

	return <List list={list} setList={setList} />;
};

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

	it('Shoudld toggle checkbox when clicked', async () => {
		render(<MockComponent />);

		const uncheckedElement = screen.getByTestId('unchecked');

		fireEvent.click(uncheckedElement);

		const checkedElement = await screen.findByTestId('checked');

		expect(checkedElement).toBeInTheDocument();
	});
});
