import { FETCH_POSTS } from '../actions';
import { FETCH_SINGLE_POST } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SINGLE_POST:
      // const post = action.payload.data;
      // const newState = { ...state };
      // const newState[post.id] = post;
      // return newState;
      // -- same as --
      return { ...state, [action.payload.data.id]: action.payload.data}
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;

  }
}
