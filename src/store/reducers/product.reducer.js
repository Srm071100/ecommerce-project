import { 
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions/product/product.types';

const initialState = {
  getProductLoading: false,
  getProductSuccess: false,
  getProductError: false,
  getProductData: {},
  getSingleProductLoading: false,
  getSingleProductSuccess: false,
  getSingleProductError: false,
  getSingleProductData: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        getProductLoading: true,
        getProductSuccess: false,
        getProductError: false,
        getProductData:{},
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        getProductLoading: false,
        getProductSuccess: true,
        getProductError: false,
        getProductData:action.payload,
      };
    case GET_PRODUCT_ERROR:
      return {
        ...state,
        getProductLoading: false,
        getProductSuccess: false,
        getProductError: true,
        getProductData:action.payload,
      };
      case GET_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        getSingleProductLoading: true,
        getSingleProductSuccess: false,
        getSingleProductError: false,
        getSingleProductData:{},
      };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        getSingleProductLoading: false,
        getSingleProductSuccess: true,
        getSingleProductError: false,
        getSingleProductData:action.payload,
      };
    case GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        getSingleProductLoading: false,
        getSingleProductSuccess: false,
        getSingleProductError: true,
        getSingleProductData:action.payload,
      };
    default:
      return state;
  }
}
