import axios from "axios";
import history from "../history";

/**
 * ACTION TYPES
 */
const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";

/**
 * INITIAL STATE
 */
const defaultUser = {};

/**
 * ACTION CREATORS
 */
const getUser = (user) => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });

/**
 * THUNK CREATORS
 */
export const me = () => async (dispatch) => {
  try {
    const res = await axios.get("/auth/me");
    dispatch(getUser(res.data || defaultUser));
  } catch (err) {
    console.error(err);
  }
};

export const auth = (email, password, method, history) => async (dispatch) => {
  let res;
  try {
    res = await axios.post(`/auth/${method}`, { email, password });
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }

  try {
    dispatch(getUser(res.data));
    history.push("/landing");
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

const ADD_USER = "ADD_USER";
const addUser = (user) => {
  return {
    type: ADD_USER,
    user,
  };
};
export const signup = (firstName, lastName, email, password) => async (
  dispatch
) => {
  let res;
  try {
    res = await axios.post(`/auth/signup`, {
      firstName,
      lastName,
      email,
      password,
    });
    dispatch(addUser(res));
  } catch (signupError) {
    return dispatch(addUser({ error: signupError }));
  }

  try {
    dispatch(getUser(res.data));
    history.push("/landing");
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.post("/auth/logout");
    dispatch(removeUser());
    // history.push("/");
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case ADD_USER:
      return action.user;
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    default:
      return state;
  }
}
