import { combineReducers } from "redux-immutable";
import { reducer as recommend } from "../application/Recommend/store";
import { reducer as singers } from "../application/Singers/store";
import { reducer as rank } from "../application/Rank/store";
import { reducer as album } from "../application/Album/store";

const rootReducer = combineReducers({
  recommend,
  singers,
  rank,
  album,
});

export default rootReducer;
