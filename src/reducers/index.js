import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import EventsReducer from './EventsReducer';
import EventDetailReducer from './EventDetailReducer';
import PrayerNetworkReducer from './PrayerNetworkReducer';

export default combineReducers({
	AppReducer: AppReducer,
	EventsReducer: EventsReducer,
	EventDetailReducer: EventDetailReducer,
	PrayerNetworkReducer: PrayerNetworkReducer,
})