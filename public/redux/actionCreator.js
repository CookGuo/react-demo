import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM } from './actionType'

export const getInputValueChange = (value) => ({
	type: INPUT_CHANGE,
	value: value
})

export const getAddItem = () => ({
	type: ADD_ITEM
})

export const getDeleteItem = (index) => ({
	type: DELETE_ITEM,
	index: index
})