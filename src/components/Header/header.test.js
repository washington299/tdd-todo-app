import React from 'react';
import { render, screen } from '@testing-library/react';

import { Header } from '.';

describe('<Todo />', () => {
	it('Should render Todo header title', () => {
		render(<Header />);

		expect(screen.getByRole('heading', { name: /Todo/i })).toBeInTheDocument();
	});
});
