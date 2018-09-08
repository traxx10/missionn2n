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
} from './types';
import firebase from 'firebase';

export const prayerRequest = (value) => {
    return (dispatch) => {
        dispatch({
            type: REQUEST_PRAYER
        })
        const prayerRequestDetail = {
            name: value.name,
            email: value.email,
            mobile: value.mobile,
            prayer: value.prayer,
        }

        firebase.database().ref(`prayer_request/${value.name}`).set(prayerRequestDetail)
        .then(() => {
            dispatch({
                type: REQUEST_PRAYER_SUCCESS,
            })
        }).catch((error) => {
            dispatch({
                type: REQUEST_PRAYER_FAILED,
                payload: error.message,
            })
        })
    }
}

export const memberRequest = (value) => {
    return (dispatch) => {
        dispatch({
            type: REQUEST_MEMBER
        })
        const memberDetails = {
            name: value.name,
            email: value.email,
            mobile: value.mobile,
        }

        firebase.database().ref(`prayer_membership/${value.name}`).set(memberDetails)
        .then(() => {
            dispatch({
                type: REQUEST_MEMBER_SUCCESS,
            })
        }).catch((error) => {
            dispatch({
                type: REQUEST_MEMBER_FAILED,
                payload: error.message,
            })
        })
    }
}

export const clearPrayerRequestForm = () => {
    return(dispatch) => {
        dispatch({
            type: CLEAR_PRAYER_REQUEST_FORM,
        })
    }
}

export const toggleModalPrayerRequest = (req) => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_MODAL_PRAYER_REQUEST,
            payload: !req
        })
    }
}

export const toggleModalMember = (req) => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_MODAL_MEMBER,
            payload: !req
        })
    }
}