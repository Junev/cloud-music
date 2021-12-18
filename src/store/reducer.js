import { combineReducers } from "redux-immutable";

const reducer = combineReducers({
  home(state = {}, action) {
    return state;
  },
});

export default reducer;
