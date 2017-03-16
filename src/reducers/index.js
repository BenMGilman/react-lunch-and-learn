 import { combineReducers } from 'redux';
 import blogsReducer from './blogsReducer';
 import {routerReducer} from 'react-router-redux';
 
 export default combineReducers({
     blogsReducer,
     routing: routerReducer
 });