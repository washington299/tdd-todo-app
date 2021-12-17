export const initialState = {
	list: [],
	filter: 'all',
};

export const reducer = (state = initialState, action) => {
	switch (action.payload.name) {
		case 'ADD_ITEM': {
			const itemCreationDate = Date.now(new Date());
			const newListItem = {
				id: itemCreationDate,
				name: action.payload.data.item,
				completed: false,
			};

			return { ...state, list: [...state.list, newListItem] };
		}
		case 'TOGGLE_ITEM': {
			const { index } = action.payload.data;
			const newList = [...state.list];

			newList[index] = {
				...newList[index],
				completed: !newList[index].completed,
			};

			return { ...state, list: newList };
		}
		case 'DELETE_ITEM': {
			const listWithDeletedItem = state.list.filter(item => item.id !== action.payload.data.id);

			return { ...state, list: listWithDeletedItem };
		}
		case 'CLEAR_COMPLETED_ITEMS': {
			const clearCompletedList = state.list.filter(item => item.completed === false);

			return { ...state, list: clearCompletedList };
		}
		case 'SET_FILTER':
			return { ...state, filter: action.payload.data.filter };
	}
};
