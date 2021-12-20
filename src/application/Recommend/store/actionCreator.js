import { fromJS } from "immutable";
import {
  getBannerRequest,
  getRecommendListRequest,
} from "../../../api/request";
import * as actionTypes from "./constants";

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data),
});

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data),
});

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest()
      .then((data) => {
        dispatch(changeBannerList(data.banners));
      })
      .catch(console.error);
  };
};

export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest()
      .then((data) => {
        const list = data.result.map((c) => ({
          ...c,
          picUrl: `${c.picUrl}?param=300x300`,
        }));
        dispatch(changeRecommendList(list));
      })
      .catch(console.error);
  };
};
