import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { ListContextProvider } from 'contexts/list/context';

import { Filters } from '.';

const MockFiltersComponent = () => {
	return (
		<ListContextProvider>
			<Filters />
		</ListContextProvider>
	);
};

describe('<Filters />', () => {
	it('Should render filters buttons', () => {
		render(<MockFiltersComponent />);

		expect(screen.getByRole('button', { name: /All/i })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /Active/i })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /Completed/i })).toBeInTheDocument();
	});

	it('Should render button all with active className by default', () => {
		render(<MockFiltersComponent />);

		expect(screen.getByRole('button', { name: /All/i })).toHaveClass('active');
	});

	it('Should add active className to button clicked', () => {
		render(<MockFiltersComponent />);

		const activeButton = screen.getByRole('button', { name: /Active/i });
		const allButton = screen.getByRole('button', { name: /All/i });

		fireEvent.click(activeButton);

		expect(allButton).not.toHaveClass('active');
		expect(activeButton).toHaveClass('active');
	});
});
