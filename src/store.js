import {createStore, applyMiddleware} from 'redux';
import reducerCombiner from './reducers/index';
import thunk from 'redux-thunk';

export default createStore(reducerCombiner, applyMiddleware(thunk));
