import React from 'react';

import { List } from 'components/List';
import { Footer } from 'components/Footer';

import 'components/Content/styles.scss';

export const Content = ({ list, setList }) => {
	return (
		<section className="content" data-testid="content">
			<List list={list} setList={setList} />

			<Footer />
		</section>
	);
};
