import { LEAD_FORM, LEAD_FORM_SUCCESS, LEAD_FORM_FAILED, CLEAR_LEAD_FORM } from './types';
import firebase from 'firebase';

export const leadForm = (value) => {
    return (dispatch) => {
        dispatch({
            type: LEAD_FORM
        })

        const leadFormDetail = {
            name: value.name,
            email: value.email,
            mobile: value.mobile,
            information: value.information,
        }

        firebase.database().ref(`lead_center_request/${value.name}`).set(leadFormDetail)
        .then(() => {
            dispatch({
                type: LEAD_FORM_SUCCESS,
            })
        }).catch((error) => {
            dispatch({
                type: LEAD_FORM_FAILED,
                payload: error.message,
            })
        })
    }
}

export const clearLeadForm = () => {
    return(dispatch) => {
        dispatch({
            type: CLEAR_LEAD_FORM,
        })
    }
}