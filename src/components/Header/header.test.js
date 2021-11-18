import React from 'react';
import { render, screen } from '@testing-library/react';

import { Header } from '.';

describe('<Todo />', () => {
	it('render Todo header title', () => {
		render(<Header />);

		const headerTitle = screen.getByRole('heading', { name: /Todo/i });

		expect(headerTitle).toBeInTheDocument();
	});
});
