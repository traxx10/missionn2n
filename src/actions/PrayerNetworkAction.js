import { REQUEST_PRAYER, REQUEST_PRAYER_SUCCESS, REQUEST_PRAYER_FAILED, CLEAR_PRAYER_REQUEST_FORM } from './types';
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

export const clearPrayerRequestForm = () => {
    return(dispatch) => {
        dispatch({
            type: CLEAR_PRAYER_REQUEST_FORM,
        })
    }
}