import { INPUT_CHANGE, LIST_ADD, LIST_DELETE } from './actionsTypes'

export const getInputChangeAction = (value) => {
	return {
		type: INPUT_CHANGE,
		value: value
	}
}

export const getAddItemAction = () => {
	return {
		type: LIST_ADD
	}
}

export const deleteItemAction = (index) => {
	return {
		type: LIST_DELETE,
		index: index
	}
}