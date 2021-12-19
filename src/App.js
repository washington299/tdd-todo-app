import React from 'react';

import { ListContextProvider } from 'contexts/list/context';

import { Main } from 'components';

import './styles/global.scss';

const App = () => {
	return (
		<ListContextProvider>
			<Main />
		</ListContextProvider>
	);
};

export default App;
