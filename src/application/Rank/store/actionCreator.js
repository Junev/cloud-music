import { fromJS } from "immutable";
import { getRankListRequest } from "../../../api/request";
import {
  CHANGE_GLOBAL_RANK_LIST,
  CHANGE_OFFICIAL_RANK_LIST,
  CHANGE_RANK_LOADING,
} from "./constants";
import { filterRanks } from "./utils";

const changeOfficialRankList = (officialList) => ({
  type: CHANGE_OFFICIAL_RANK_LIST,
  data: fromJS(officialList),
});

const changeGlobalRankList = (globalList) => ({
  type: CHANGE_GLOBAL_RANK_LIST,
  data: fromJS(globalList),
});

const changeLoading = (data) => ({ type: CHANGE_RANK_LOADING, data });

export const getRankList = () => (dispatch, getStore) => {
  // dispatch(changeLoading(true));
  getRankListRequest().then((res) => {
    const data = res.list.map((c) => ({
      ...c,
      coverImgUrl: `${c.coverImgUrl}?param=300x300`,
    }));
    const i = filterRanks(data);
    const officialList = data.slice(0, i);
    const globalList = data.slice(i);
    dispatch(changeOfficialRankList(officialList));
    dispatch(changeGlobalRankList(globalList));
    dispatch(changeLoading(false));
  });
};
