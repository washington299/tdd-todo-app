import React, { createContext, useReducer } from 'react';

import { initialState, reducer } from 'contexts/list/reducer';

export const ListContext = createContext([]);

export const ListContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <ListContext.Provider value={{ state, dispatch }}>{children}</ListContext.Provider>;
};
