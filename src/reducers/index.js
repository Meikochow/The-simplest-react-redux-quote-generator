import { combineReducers } from 'redux';
import getQuoteReducer from './getQuoteReducer';

//this is the meeting (combining) place for all of the redux components

export default combineReducers({
    bank:getQuoteReducer
});