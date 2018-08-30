import firebase from 'firebase';
import { FETCH_EVENTS_SUCCESS } from './types';

export const fetchEvents = () => {
    return(dispatch) => {
        firebase.database().ref('events').on('value', (snapshot) => {
            dispatch({
                type: FETCH_EVENTS_SUCCESS,
                payload: snapshot.val(),
            })
        })
    }
}