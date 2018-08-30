import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import EventsReducer from './EventsReducer';

export default combineReducers({
	AppReducer: AppReducer,
	EventsReducer: EventsReducer,
})