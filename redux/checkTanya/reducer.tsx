import {
  CHECK_TANYA_REQUEST,
  CHECK_TANYA_SUCCESS,
  CHECK_TANYA_FAILED,
  CHECK_TANYA_DESTROY,
} from './type';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const CheckTanyaReducer = (state = initialState, action: any) => {
  switch (action?.type) {
    case CHECK_TANYA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CHECK_TANYA_SUCCESS:
      return {
        loading: false,
        data: action.payload.data,
        error: '',
      };
    case CHECK_TANYA_FAILED:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    case CHECK_TANYA_DESTROY:
      return state;
    default:
      return state;
  }
};

export default CheckTanyaReducer;
