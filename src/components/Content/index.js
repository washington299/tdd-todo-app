import React from 'react';

import { List, Footer } from 'components';

import 'components/Content/styles.scss';

export const Content = () => {
	return (
		<div className="content" data-testid="content">
			<List />
			<Footer />
		</div>
	);
};
