import { fromJS } from "immutable";
import {
  CHANGE_GLOBAL_RANK_LIST,
  CHANGE_OFFICIAL_RANK_LIST,
  CHANGE_RANK_LOADING,
} from "./constants";

const defaultState = fromJS({
  officialList: [],
  globalList: [],
  enterLoading: true,
});

const reducer = (store = defaultState, action) => {
  switch (action.type) {
    case CHANGE_OFFICIAL_RANK_LIST:
      return store.set("officialList", action.data);
    case CHANGE_GLOBAL_RANK_LIST:
      return store.set("globalList", action.data);
    case CHANGE_RANK_LOADING:
      return store.set("enterLoading", action.data);
    default:
      return store;
  }
};

export { reducer };
