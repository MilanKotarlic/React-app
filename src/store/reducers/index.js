import { FETCH_USERS_SUCCESS } from '../actions/types';

const initialState = {
  users: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
}