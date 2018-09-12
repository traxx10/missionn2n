import { FETCH_EVERY_CHILD_GALLERY, FETCH_EVERY_CHILD_GALLERY_SUCCESS  } from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    gallery: {}
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_EVERY_CHILD_GALLERY:
            return { ...state, loading: true }

        case FETCH_EVERY_CHILD_GALLERY_SUCCESS:
            return { ...state, loading: false, gallery: action.payload }

        default:
            return state;
    }
}