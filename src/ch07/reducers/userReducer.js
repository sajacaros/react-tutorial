import { SET_USER } from '../actions/userActions';

export default function reducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER: {
      return { ...state, ...payload };
      // return { ...state, user: payload };
    }
    default:
      return state;
  }
}
