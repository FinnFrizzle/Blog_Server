import { combineReducers } from 'redux';
import PostsReducer from './Reducer_Posts.js';

const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;
