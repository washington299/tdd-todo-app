import React from 'react';
import { render, screen } from '@testing-library/react';

import { ListContextProvider } from 'contexts/list/context';

import { Content } from '.';

describe('<Content />', () => {
	it('Should render content', () => {
		render(
			<ListContextProvider>
				<Content />
			</ListContextProvider>,
		);

		expect(screen.getByTestId('content')).toBeInTheDocument();
	});
});
