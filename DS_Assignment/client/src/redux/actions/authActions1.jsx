import axios from 'axios';
import setAuthToken1 from '../../utils/setAuthToken1';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types'; // Register User
export const registerUser1 = (userData, history) => dispatch => {
  axios
    .post('/api/user1/register1', userData)
    .then(res => history.push('/login1')) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}; // Login - get user token
export const loginUser1 = userData => dispatch => {
  axios
    .post('/api/user1/login1', userData)
    .then(res => {
      // Save to localStorage// Set token to localStorage
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken1(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser1(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}; // Set logged in user
export const setCurrentUser1 = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
}; // User loading
export const setUserLoading1 = () => {
  return {
    type: USER_LOADING
  };
}; // Log user out
export const logoutUser1 = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken1(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser1({}));
};
