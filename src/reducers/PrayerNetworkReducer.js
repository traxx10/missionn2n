import { 
    REQUEST_PRAYER, 
    REQUEST_PRAYER_SUCCESS, 
    REQUEST_PRAYER_FAILED,
    CLEAR_PRAYER_REQUEST_FORM,
    TOGGLE_MODAL_PRAYER_REQUEST,
    TOGGLE_MODAL_MEMBER,
    REQUEST_MEMBER,
    REQUEST_MEMBER_SUCCESS,
    REQUEST_MEMBER_FAILED,

 } from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    message: '',
    sent: false,
    prayerRequest: false,
    membershipRequest: false,
    memberLoading: false,
    memberMessage: '',
    memberSent: false,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case REQUEST_MEMBER:
            return { ...state, memberLoading: true, memberMessage: '' }

        case REQUEST_PRAYER:
            return { ...state, loading: true, message: '' }

        case REQUEST_PRAYER_SUCCESS:
            return { ...state, loading: false, message: 'Prayer request sent successfully!', sent: true }

        case REQUEST_MEMBER_SUCCESS:
            return { ...state, memberLoading: false, memberMessage: 'Successfully joined our prayer network', memberSent: true }

        case REQUEST_PRAYER_FAILED:
            return { ...state, loading: false, message: action.payload }

        case REQUEST_MEMBER_FAILED:
            return { ...state, memberLoading: false, memberMessage: action.payload }

        case TOGGLE_MODAL_PRAYER_REQUEST:
            return { ...state, prayerRequest: action.payload  } 

        case TOGGLE_MODAL_MEMBER:
            return { ...state, membershipRequest: action.payload }

        case CLEAR_PRAYER_REQUEST_FORM:
            return INITIAL_STATE;

        default:
            return state;
    }
}