import React from 'react';
import { render, screen } from '@testing-library/react';

import { Content } from '.';

describe('<Content />', () => {
	it('Should render content', () => {
		render(<Content />);

		const content = screen.getByTestId('content');

		expect(content).toBeInTheDocument();
	});
});
