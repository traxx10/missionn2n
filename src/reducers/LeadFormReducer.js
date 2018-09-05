import { LEAD_FORM, LEAD_FORM_SUCCESS, LEAD_FORM_FAILED, CLEAR_LEAD_FORM } from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    message: '',
    sent: false,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LEAD_FORM:
            return { ...state, loading: true, message: '' }

        case LEAD_FORM_SUCCESS:
            return { ...state, loading: false, message: 'Request sent successfully!', sent: true }

        case LEAD_FORM_FAILED:
            return { ...state, loading: false, message: action.payload }

        case CLEAR_LEAD_FORM:
            return INITIAL_STATE;

        default:
            return state;
    }
}