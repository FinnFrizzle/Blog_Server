import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import PostsReducer from './Reducer_Posts.js';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
