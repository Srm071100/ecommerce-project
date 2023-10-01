import Axios from "axios";

export const request = async (method, path, requestBody, isAuth, isBlob) => {
  let config = {
    method,
    url: `https://fakestoreapi.com/` + path,
  };
  if (isAuth) {
    const token = "fgdgddrgfgdf";
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
