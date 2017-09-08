import {combineReducers} from 'redux';
import agencyReducer from './agencyReducer';
import {routerReducer} from 'react-router-redux';

export default combineReducers({agencyReducer, routing:routerReducer});

