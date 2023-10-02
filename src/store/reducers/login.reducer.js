import { 
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR ,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR
} from '../actions/login/login.types';

const initialState = {
  loginUserLoading: false,
  loginUserSuccess: false,
  loginUserError: false,
  loginUserData: {},
  addUserLoading: false,
  addUserSuccess: false,
  addUserError: false,
  addUserData: {},
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
    case ADD_USER_REQUEST:
      return {
        ...state,
        addUserLoading: true,
        addUserSuccess: false,
        addUserError: false,
        addUserData:{},
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        addUserLoading: false,
        addUserSuccess: true,
        addUserError: false,
        addUserData:action.payload,
      };
    case ADD_USER_ERROR:
      return {
        ...state,
        addUserLoading: false,
        addUserSuccess: false,
        addUserError: true,
        addUserData:action.payload,
      };
    default:
      return state;
  }
}
