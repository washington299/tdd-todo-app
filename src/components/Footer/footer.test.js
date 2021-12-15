import React, { useReducer } from 'react';
import { render, screen } from '@testing-library/react';

import { ListContext } from 'contexts/list/context';
import { reducer } from 'contexts/list/reducer';

import { Footer } from '.';

const MockFooterComponent = ({ listItems = [] }) => {
	const [state, dispatch] = useReducer(reducer, listItems);

	return (
		<ListContext.Provider value={{ state, dispatch }}>
			<Footer />
		</ListContext.Provider>
	);
};

describe('<Footer />', () => {
	const mockListItems = [
		{
			id: 1,
			name: 'Wash the dishes',
			completed: false,
		},
		{
			id: 2,
			name: 'Finish homework',
			completed: false,
		},
	];

	it('Should render singular message when list is empty', () => {
		render(<MockFooterComponent />);

		expect(screen.getByText(/0 item left/i)).toBeInTheDocument();
	});

	it('Should render plural message when more than 2 item is on the list', () => {
		render(<MockFooterComponent listItems={mockListItems} />);

		expect(screen.getByText(/2 items left/i)).toBeInTheDocument();
	});
});
