export const initialState = [];

export const reducer = (state = initialState, action) => {
	switch (action.payload.name) {
		case 'ADD_ITEM':
			return [...state, action.payload.data];
		case 'CHECK_ITEM': {
			const { index } = action.payload.data;
			const newList = [...state];

			newList[index] = {
				...newList[index],
				completed: true,
			};

			state = newList;

			return state;
		}
		case 'UNCHECK_ITEM': {
			const { index } = action.payload.data;
			const newList = [...state];

			newList[index] = {
				...newList[index],
				completed: false,
			};

			state = newList;

			return state;
		}
		case 'DELETE_ITEM': {
			const listWithDeletedItem = state.filter(item => item.id !== action.payload.data.id);

			state = listWithDeletedItem;

			return state;
		}
		case 'CLEAR_COMPLETED_ITEMS': {
			const clearCompletedList = state.filter(item => item.completed === false);

			state = clearCompletedList;

			return state;
		}
	}
};
