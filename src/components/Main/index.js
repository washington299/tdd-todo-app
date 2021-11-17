import React from 'react';

import { useWindowSize } from 'hooks/useWindowSize';

import 'components/Main/styles.scss';

export const Main = () => {
	const { width } = useWindowSize();

	const isSmallDevice = width < 640 ? true : false;

	return (
		<img
			src={isSmallDevice ? '/images/bg-mobile-light.jpg' : '/images/bg-desktop-light.jpg'}
			alt="background image mobile light"
			className="bg-img"
		/>
	);
};
