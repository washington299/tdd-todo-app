export const initialState = [];

export const reducer = (state = initialState, action) => {
	switch (action.payload.name) {
		case 'ADD_ITEM': {
			const itemCreationDate = Date.now(new Date());
			const newListItem = {
				id: itemCreationDate,
				name: action.payload.data.item,
				completed: false,
			};

			return [...state, newListItem];
		}
		case 'TOGGLE_ITEM': {
			const { index } = action.payload.data;
			const newList = [...state];

			newList[index] = {
				...newList[index],
				completed: !newList[index].completed,
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
