import wordsReducer from './wordsReducer';
import shouldShowFormReducer from './shouldShowFormReducer';
import filterModeReducer from './filtermodeReducer';
import {combineReducers} from 'redux';


export const reducer = combineReducers({
    words : wordsReducer,
    shouldShowForm : shouldShowFormReducer,
    filterMode : filterModeReducer
})
