import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { List } from '.';

const MockComponent = ({ listItems = [] }) => {
	const [list, setList] = useState(listItems);

	return <List list={list} setList={setList} />;
};

describe('<List />', () => {
	const mockListItem = [
		{
			id: 1,
			name: 'Wash the dishes',
			completed: false,
		},
	];

	it('Should show a message when list is empty', () => {
		render(<MockComponent />);

		expect(screen.getByText(/List is empty/i)).toBeInTheDocument();
	});

	it('Should render list item if list is not empty', () => {
		render(<MockComponent listItems={mockListItem} />);

		expect(screen.getByText(/Wash the dishes/i)).toBeInTheDocument();
	});

	it('Should toggle checkbox when clicked', () => {
		render(<MockComponent listItems={mockListItem} />);

		fireEvent.click(screen.getByTestId('unchecked', { exact: true }));

		expect(screen.getByTestId('checked', { exact: true })).toBeInTheDocument();

		fireEvent.click(screen.getByTestId('checked', { exact: true }));

		expect(screen.getByTestId('unchecked', { exact: true })).toBeInTheDocument();
	});
});
