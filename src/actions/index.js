import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_SINGLE_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POSTS';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=Fetch_it_boy';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(values, callBack) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
  .then(() => callback())
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchSinglePost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
  return {
    type: FETCH_SINGLE_POST,
    payload: request
  }
}
