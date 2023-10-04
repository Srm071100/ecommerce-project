// This is where you will have api calls
import { request } from "../../../services/api-service";
import { 
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "./product.types";


export const fetchProductList = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });
  // const url = `https://651a5e02340309952f0d2b2d.mockapi.io/api/v1/Products`;
  const url = `https://dummyjson.com/products/`;
  request("get", url, "", true).then(
    (res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res });
    },
    (error) => {
      dispatch({ type: GET_PRODUCT_ERROR, payload: error.response.data  });
      console.error("err", error);
    }
  );
};

export const fetchSingleProductList = (id) => async (dispatch) => {
  dispatch({ type: GET_SINGLE_PRODUCT_REQUEST });
  // const url = `https://651a5e02340309952f0d2b2d.mockapi.io/api/v1/Products/${id}`;
  const url = `https://dummyjson.com/products/${id}`;
  request("get", url, "", true).then(
    (res) => {
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: res });
    },
    (error) => {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR, payload: error.response.data  });
      console.error("err", error);
    }
  );
};