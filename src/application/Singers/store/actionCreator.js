import { fromJS } from "immutable";
import {
  CHANGE_SINGER_LIST,
  CHANGE_ENTER_LOADING,
  CHANGE_PULLUP_LOADING,
  CHANGE_PULLDOWN_LOADING,
  CHANGE_PAGE_COUNT,
} from "./constants";
import {
  getHotSingerListRequest,
  getSingerListRequest,
} from "../../../api/request";

const changeSingerList = (data) => ({
  type: CHANGE_SINGER_LIST,
  data: fromJS(data),
});

export const changePageCount = (data) => ({ type: CHANGE_PAGE_COUNT, data });

export const changeEnterLoading = (data) => ({
  type: CHANGE_ENTER_LOADING,
  data,
});

export const changePullUpLoading = (data) => ({
  type: CHANGE_PULLUP_LOADING,
  data,
});

export const changePullDownLoading = (data) => ({
  type: CHANGE_PULLDOWN_LOADING,
  data,
});

export const getHotSingerList = () => (dispatch, getStore) =>
  getHotSingerListRequest(0)
    .then((res) => {
      const data = res.artists.map((c) => ({
        ...c,
        picUrl: `${c.picUrl}?param=50x50`,
      }));
      dispatch(changeSingerList(data));
      dispatch(changeEnterLoading(false));
      dispatch(changePullDownLoading(false));
    })
    .catch(console.error);

export const loadMoreHotSingerList = () => (dispatch, getStore) => {
  const pageCount = getStore().getIn(["singers", "pageCount"]);
  const singerList = getStore().getIn(["singers", "singerList"]).toJS();
  getHotSingerListRequest(pageCount)
    .then((res) => {
      const newData = res.artists.map((c) => ({
        ...c,
        picUrl: `${c.picUrl}?param=50x50`,
      }));
      const data = [...singerList, ...newData];
      dispatch(changeSingerList(data));
      dispatch(changeEnterLoading(false));
      dispatch(changePullUpLoading(false));
    })
    .catch(console.error);
};

export const getSingerList = (category, alpha) => (dispatch, getStore) =>
  getSingerListRequest(category, alpha, 0)
    .then((res) => {
      const data = res.artists.map((c) => ({
        ...c,
        picUrl: `${c.picUrl}?param=50x50`,
      }));
      dispatch(changeSingerList(data));
      dispatch(changeEnterLoading(false));
      dispatch(changePullDownLoading(false));
    })
    .catch(console.error);

export const loadMoreSingerList =
  (category, alphabet) => (dispatch, getStore) => {
    const pageCount = getStore().getIn(["singers", "pageCount"]);
    const singerList = getStore().getIn(["singers", "singerList"]).toJS();
    getSingerListRequest(category, alphabet, pageCount)
      .then((res) => {
        const newData = res.artists.map((c) => ({
          ...c,
          picUrl: `${c.picUrl}?param=50x50`,
        }));
        const data = [...singerList, ...newData];
        dispatch(changeSingerList(data));
        dispatch(changeEnterLoading(false));
        dispatch(changePullUpLoading(false));
      })
      .catch(console.error);
  };
