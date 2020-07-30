import { combineReducers } from 'redux';
import { nutrition } from './nutrition/reducer';

export const rootReducer = combineReducers({ nutrition });
