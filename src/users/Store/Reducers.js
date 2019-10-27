import { combineReducers } from "redux";

import UserReducer from "../List/Reducer";

export default combineReducers({
  users: UserReducer
});
