import React from 'react';
import { render, screen } from '@testing-library/react';

import { List } from '.';

describe('<List />', () => {
	it('Should render list', () => {
		render(<List />);

		const list = screen.getByTestId('list');

		expect(list).toBeInTheDocument();
	});

	it('Should show a message when list is empty', () => {
		render(<List />);

		const emptyMessage = screen.getByText(/List is empty/i);

		expect(emptyMessage).toBeInTheDocument();
	});
});
