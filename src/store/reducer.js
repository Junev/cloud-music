import { combineReducers } from "redux-immutable";
import { reducer as recommend } from "../application/Recommend/store";
import { reducer as singer } from "../application/Singer/store";
import { reducer as rank } from "../application/Rank/store";

const rootReducer = combineReducers({
  recommend,
  singer,
  rank,
});

export default rootReducer;
