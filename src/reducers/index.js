import { combineReducers } from 'redux';
import { commentsReducer } from './comments-reducer';

const reducers = combineReducers({
  comments: commentsReducer
});

export default reducers;
