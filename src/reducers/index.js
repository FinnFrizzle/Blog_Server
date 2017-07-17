import { combineReducers } from 'redux';
import PostsReducer from './reducers/Reducer_Posts.js';

const rootReducer = combineReducers({
  posts: PostReducer
});

export default rootReducer;
