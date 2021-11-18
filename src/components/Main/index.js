import React from 'react';

import { useWindowSize } from 'hooks/useWindowSize';

import { Todo } from 'components/Todo';

import 'components/Main/styles.scss';

export const Main = () => {
	const { width } = useWindowSize();

	const isSmallDevice = width < 640 ? true : false;

	return (
		<>
			<img
				src={isSmallDevice ? '/images/bg-mobile-light.jpg' : '/images/bg-desktop-light.jpg'}
				alt="background image light"
				className="bg-img"
			/>
			<Todo />
		</>
	);
};
