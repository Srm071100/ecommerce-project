import Axios from "axios";
import Cookies from "js-cookie";

export const request = async (method, url, requestBody, isAuth, isBlob) => {
  let config = {
    method,
    url
  };
  if (isAuth) {
    const token = Cookies.get("js_user_token");
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  if (method === "get") {
    config.params = requestBody;
  } else {
    config.data = requestBody;
  }
  if (isBlob) {
    config.responseType = "blob";
  }
  return Axios.request(config)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
