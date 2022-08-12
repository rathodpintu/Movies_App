/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';

const rootReducer = combineReducers({
    ProductReducer,
});

export default rootReducer;

/*

Create a rootreducer containing all the reducers, in this case it contains the single property bookreducer

*/
