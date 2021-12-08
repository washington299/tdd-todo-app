import React from 'react';

import 'components/Footer/styles.scss';

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__list-quantity">0 item left</div>
			<button className="footer__clear-button">Clear completed</button>
		</footer>
	);
};
