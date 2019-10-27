// @flow
import { ActionTypes } from "./Actions";
const INITIAL_STATE = {
  items: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // #5: Whenever the REFRESH_LIST action is dispatched, the reducer will update the list of items to the list passed as payload
    case ActionTypes.REFRESH_LIST:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
