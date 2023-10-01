// This is where you will have api calls
import { request } from "../../../services/api-service";
import { 
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR
} from "./login.types";

// Users action
export const loginUser = (data) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_REQUEST });
  const url = `auth/login`;
  request("post", url, data, false).then(
    (res) => {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
    },
    (error) => {
      dispatch({ type: LOGIN_USER_ERROR, payload: error.response.data  });
      console.error("err", err);
    }
  );
};

