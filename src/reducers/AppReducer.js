import { TOGGLE_SIDE_DRAWER } from '../actions/types';

const INITIAL_STATE = {
	sideDrawer: false,
}

export default (state = INITIAL_STATE,  action) => {
	switch(action.type) {

		case TOGGLE_SIDE_DRAWER:
			return { ...state, sideDrawer: action.payload }
			
		default:
			return state;
	}
}