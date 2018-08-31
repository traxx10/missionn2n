import { TOGGLE_MODAL, KEEP_UPDATE_SUCCESS, KEEP_UPDATE } from '../actions/types';

const INITIAL_STATE = {
    modalVisible: false,
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TOGGLE_MODAL:
            return { ...state, modalVisible: action.payload }

        case KEEP_UPDATE:
            return { ...state, loading: true }

        case KEEP_UPDATE_SUCCESS:
            return { ...state, loading: false, modalVisible: false }

        default:
            return state;
    }
}