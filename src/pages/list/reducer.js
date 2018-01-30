import { GETLISTINFO } from './actionType.js'

const stateDefault = {
    content: []
}

export default (state = stateDefault, action) => {
    const { content, type } = action
    switch (type) {
        case GETLISTINFO: 
            return {
                content: content
            }
        default: return state
    }
} 