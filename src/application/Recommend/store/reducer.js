import * as actionTypes from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  enterLoading: true,
  bannerList: [],
  recommendList: [],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set("enterLoading", !state.getIn(["enterLoading"]));
    case actionTypes.CHANGE_BANNER:
      return state.set("bannerList", action.data);
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.set("recommendList", action.data);
    default:
      return state;
  }
};

export { reducer };
