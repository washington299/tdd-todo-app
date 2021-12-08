import React from 'react';
import { render, screen } from '@testing-library/react';

import { Footer } from '.';

describe('<Footer />', () => {
	it('Should render singular message when list is empty', () => {
		render(<Footer />);

		expect(screen.getByText(/0 item left/i)).toBeInTheDocument();
	});

	it('Should render plural message when more than 2 item is on the list', () => {
		render(<Footer listQuantity={2} />);

		expect(screen.getByText(/2 items left/i)).toBeInTheDocument();
	});
});
