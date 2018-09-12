import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import EventsReducer from './EventsReducer';
import EventDetailReducer from './EventDetailReducer';
import PrayerNetworkReducer from './PrayerNetworkReducer';
import LeadFormReducer from './LeadFormReducer';
import EveryChildCountReducer from './EveryChildCountReducer';

export default combineReducers({
	AppReducer: AppReducer,
	EventsReducer: EventsReducer,
	EventDetailReducer: EventDetailReducer,
	PrayerNetworkReducer: PrayerNetworkReducer,
	LeadFormReducer: LeadFormReducer,
	EveryChildCountReducer: EveryChildCountReducer,
})