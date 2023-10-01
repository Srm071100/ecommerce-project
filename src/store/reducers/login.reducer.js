import { 
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR } from '../actions/login/login.types';

const initialState = {
  loginUserLoading: false,
  loginUserSuccess: false,
  loginUserError: false,
  loginUserData: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loginUserLoading: true,
        loginUserSuccess: false,
        loginUserError: false,
        loginUserData:{},
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginUserLoading: false,
        loginUserSuccess: true,
        loginUserError: false,
        loginUserData:action.payload,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loginUserLoading: false,
        loginUserSuccess: false,
        loginUserError: true,
        loginUserData:action.payload,
      };
    default:
      return state;
  }
}
