import firebase from 'firebase';
import { FETCH_EVERY_CHILD_GALLERY_SUCCESS, FETCH_EVERY_CHILD_GALLERY } from './types';

export const everyChildGallery = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_EVERY_CHILD_GALLERY
        })

        firebase.database().ref('gallery/every_child_counts')
        .on('value', snapshot => {
            dispatch({
                type: FETCH_EVERY_CHILD_GALLERY_SUCCESS,
                payload: snapshot.val(),
            })
        })
    }
}