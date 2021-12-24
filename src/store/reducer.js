import { combineReducers } from "redux-immutable";
import { reducer as recommend } from "../application/Recommend/store";
import { reducer as singer } from "../application/Singer/store";

const rootReducer = combineReducers({
  recommend,
  singer,
});

export default rootReducer;
