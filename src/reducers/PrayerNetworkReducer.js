import { REQUEST_PRAYER, REQUEST_PRAYER_SUCCESS, REQUEST_PRAYER_FAILED,CLEAR_PRAYER_REQUEST_FORM } from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    message: '',
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case REQUEST_PRAYER:
            return { ...state, loading: true, message: '' }

        case REQUEST_PRAYER_SUCCESS:
            return { ...state, loading: false, message: 'Prayer request sent successfully!', }

        case REQUEST_PRAYER_FAILED:
            return { ...state, loading: false, message: action.payload }

        case CLEAR_PRAYER_REQUEST_FORM:
            return INITIAL_STATE;

        default:
            return state;
    }
}