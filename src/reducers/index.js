import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import EventsReducer from './EventsReducer';
import EventDetailReducer from './EventDetailReducer';

export default combineReducers({
	AppReducer: AppReducer,
	EventsReducer: EventsReducer,
	EventDetailReducer: EventDetailReducer,
})