import React from 'react';
import { render, screen } from '@testing-library/react';

import { Todo } from '.';

describe('<Todo />', () => {
	it('render Todo header title', () => {
		render(<Todo />);

		const headerTitle = screen.getByRole('heading', { name: /Todo/i });

		expect(headerTitle).toBeInTheDocument();
	});
});
