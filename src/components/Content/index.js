import React from 'react';

import { List } from 'components/List';
import { Footer } from 'components/Footer';

import 'components/Content/styles.scss';

export const Content = () => {
	return (
		<section className="content" data-testid="content">
			<List />
			<Footer />
		</section>
	);
};
