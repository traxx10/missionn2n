import { TOGGLE_MODAL, KEEP_UPDATE_SUCCESS, KEEP_UPDATE } from './types';
import firebase from 'firebase';

export const toggleModal = (modal) => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_MODAL,
            payload: !modal
        })
    }
}

export const keepUpdate = (eventName, value) => {
    return (dispatch) => {
        dispatch({
            type: KEEP_UPDATE
        })
        const memberDetail = {
            name: value.name,
            email: value.email,
            mobile: value.mobile,
        }

        firebase.database().ref(`members/${eventName}`).push(memberDetail)
        .then(() => {
            dispatch({
                type: KEEP_UPDATE_SUCCESS,
            })
        })
    }
}