// This is where you will have api calls
import { request } from "../../../services/api-service";
import { 
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  RESET_LOGIN_USER_STATE
} from "./login.types";

// Users action
export const loginUser = (data) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_REQUEST });
  const url = `https://api.escuelajs.co/api/v1/auth/login`;
  request("post", url, data, false).then(
    (res) => {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: res });
    },
    (error) => {
      dispatch({ type: LOGIN_USER_ERROR, payload: error.response.data  });
      console.error("err", error);
    }
  );
};
export const resetLoginUserState = () => async (dispatch) => {
  dispatch({ type: RESET_LOGIN_USER_STATE });
}

export const registerUser = (data) => async (dispatch) => {
  dispatch({ type: ADD_USER_REQUEST });
  const url = `https://api.escuelajs.co/api/v1/users`;
  request("post", url, data, false).then(
    (res) => {
      dispatch({ type: ADD_USER_SUCCESS, payload: res });
    },
    (error) => {
      dispatch({ type: ADD_USER_ERROR, payload: error.response.data  });
      console.error("err", error);
    }
  );
};

export const fetchUserData = (data) => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  const url = `https://api.escuelajs.co/api/v1/auth/profile`;
  request("get", url, "", true).then(
    (res) => {
      dispatch({ type: GET_USER_SUCCESS, payload: res });
    },
    (error) => {
      dispatch({ type: GET_USER_ERROR, payload: error.response.data  });
      console.error("err", error);
    }
  );
};