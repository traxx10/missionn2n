import { FETCH_EVENTS, FETCH_EVENTS_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
	loading: true,
	events: [],
}

export default (state = INITIAL_STATE,  action) => {
	switch(action.type) {
		case FETCH_EVENTS: 
			return { ...state, loading: false };
			
		case FETCH_EVENTS_SUCCESS:
			return { ...state, events: action.payload, loading: false };

		default:
			return state;
	}
}