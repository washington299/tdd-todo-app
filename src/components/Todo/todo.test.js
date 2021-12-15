import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { ListContextProvider } from 'contexts/list/context';

import { Todo } from '.';

const MockTodoComponent = () => {
	return (
		<ListContextProvider>
			<Todo />
		</ListContextProvider>
	);
};

describe('<Todo />', () => {
	it('Should add a list item to the list when clicked in the input icon', () => {
		render(<MockTodoComponent />);

		const listEmptyMessage = screen.getByText(/List is empty/i);

		fireEvent.change(screen.getByPlaceholderText(/Create a new todo/i), {
			target: { value: 'Wash the dishes' },
		});
		fireEvent.click(screen.getByTitle(/Form send icon/i));

		expect(listEmptyMessage).not.toBeInTheDocument();
		expect(screen.getByText(/Wash the dishes/i)).toBeInTheDocument();
	});

	it('Should clear completed items from the list', () => {
		render(<MockTodoComponent />);

		fireEvent.change(screen.getByPlaceholderText(/Create a new todo/i), {
			target: { value: 'Wash the dishes' },
		});
		fireEvent.click(screen.getByTitle(/Form send icon/i));
		fireEvent.click(screen.getByTestId('unchecked', { exact: true }));
		fireEvent.click(screen.getByRole('button', { name: /Clear completed/i }));

		expect(screen.getByText(/List is empty/i)).toBeInTheDocument();
	});

	// it('Should remove Input and Clear completed button from screen when active/completed filter is selected', () => {
	// 	render(<MockTodoComponent />);

	// });
});
