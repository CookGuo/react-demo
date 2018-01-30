import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM } from './actionType'

const stateDefault = {
    inputValue: '',
    list: []
}

export default (state = stateDefault, action) => {
    const { value, index, type } = action
    switch (type) {
        case INPUT_CHANGE: {
            return {
                inputValue: value,
                list: [...state.list]
            }
        }
        case ADD_ITEM: {
            return {
                inputValue: '',
                list: [...state.list, state.inputValue]
            }
        }
        case DELETE_ITEM: {
            state.list.splice(index,1)
            return {
                inputValue: state.inputValue,
                list: [...state.list]
            }
        }
        default: return state
    }
}