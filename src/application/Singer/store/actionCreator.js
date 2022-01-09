import { fromJS } from "immutable";
import { getSingerInfoRequest } from "../../../api/request";
import { changeEnterLoading } from "../../Album/store/actionCreator";
import * as actionTypes from "./constants";

const changeArtist = (data) => ({
  type: actionTypes.CHANGE_ARTIST,
  data: fromJS(data),
});

const changeSongs = (data) => ({
  type: actionTypes.CHANGE_SONGS_OF_ARTIST,
  data: fromJS(data),
});

const changeLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data,
});

const getSingerInfo = (id) => (dispatch) => {
  dispatch(changeLoading(true));
  getSingerInfoRequest(id).then((data) => {
    dispatch(changeArtist(data.artist));
    dispatch(changeSongs(data.hotSongs));
    dispatch(changeEnterLoading(false));
  });
};

export { getSingerInfo };
