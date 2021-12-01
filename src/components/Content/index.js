import React from 'react';

import { List } from 'components/List';

import 'components/Content/styles.scss';

export const Content = ({ list = [] }) => {
	return (
		<section className="content" data-testid="content">
			<List list={list} />
		</section>
	);
};
