import { combineReducers } from "redux-immutable";
import { reducer as recommend } from "../application/Recommend/store";

const rootReducer = combineReducers({
  recommend,
});

export default rootReducer;
