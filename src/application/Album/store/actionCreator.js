import { fromJS } from "immutable";
import { getAlbumDetailRequest } from "../../../api/request";
import { CHANGE_CURRENT_ALBUM, CHANGE_ENTER_LOADING } from "./constants";

export const changeCurrentAlbum = (data) => ({
  type: CHANGE_CURRENT_ALBUM,
  data: fromJS(data),
});

export const changeEnterLoading = (data) => ({
  type: CHANGE_ENTER_LOADING,
  data: fromJS(data),
});

export const getAlbumList = (id) => (dispatch) => {
  dispatch(changeEnterLoading(true));
  getAlbumDetailRequest(id)
    .then((res) => {
      let data = res.playlist;
      dispatch(changeCurrentAlbum(data));
      dispatch(changeEnterLoading(false));
    })
    .catch(console.error);
};
