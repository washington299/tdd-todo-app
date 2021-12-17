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

	it('Should remove Input and Clear completed button from screen when active/completed filter is selected', () => {
		render(<MockTodoComponent />);

		const todoInput = screen.getByPlaceholderText(/Create a new todo/i);
		const clearCompletedButton = screen.getByRole('button', { name: /Clear completed/i });

		fireEvent.click(screen.getByRole('button', { name: /Active/i }));

		expect(todoInput).not.toBeInTheDocument();
		expect(clearCompletedButton).not.toBeInTheDocument();
	});

	it('Should render correct active list items filter', () => {
		render(<MockTodoComponent />);

		fireEvent.change(screen.getByPlaceholderText(/Create a new todo/i), {
			target: { value: 'Wash the dishes' },
		});
		fireEvent.click(screen.getByTitle(/Form send icon/i));
		fireEvent.change(screen.getByPlaceholderText(/Create a new todo/i), {
			target: { value: 'Finish homework' },
		});
		fireEvent.click(screen.getByTitle(/Form send icon/i));

		const filterActiveButton = screen.getByRole('button', { name: /Active/i });

		fireEvent.click(filterActiveButton);

		const items = screen.getAllByRole('listitem');
		const itemsLeft = screen.getByText(/2 items left/i);

		expect(items.length).toEqual(2);
		expect(itemsLeft).toBeInTheDocument();
	});

	it('Should render correct completed list items filter', () => {
		render(<MockTodoComponent />);

		fireEvent.change(screen.getByPlaceholderText(/Create a new todo/i), {
			target: { value: 'Wash the dishes' },
		});
		fireEvent.click(screen.getByTitle(/Form send icon/i));
		fireEvent.change(screen.getByPlaceholderText(/Create a new todo/i), {
			target: { value: 'Finish homework' },
		});
		fireEvent.click(screen.getByTitle(/Form send icon/i));

		const filterCompletedButton = screen.getAllByRole('button', { name: /Completed/i });

		fireEvent.click(filterCompletedButton[1]);

		const emptyMessage = screen.getByText(/List is empty/i);
		const itemsLeft = screen.getByText(/0 item left/i);

		expect(emptyMessage).toBeInTheDocument();
		expect(itemsLeft).toBeInTheDocument();
	});
});
