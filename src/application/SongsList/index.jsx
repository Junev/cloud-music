import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  changePlayList,
  changeSequencePlayList,
} from "../Player/store/actionCreator";
import { SongList } from "./style";
import List from "./SongList";
import ListOperation from "./ListOperation";

const SongsList = (props) => {
  const { songs, subscribedCount, startMusicAnimation } = props;

  const dispatch = useDispatch();
  const selectItem = useCallback(
    (x, y) => {
      dispatch(changePlayList(songs));
      dispatch(changeSequencePlayList(songs));
      startMusicAnimation(x, y);
    },
    [dispatch, songs, startMusicAnimation]
  );

  return (
    <SongList>
      <ListOperation total={songs.length} subscribedCount={subscribedCount} />
      <List songs={songs} selectItem={selectItem} />
    </SongList>
  );
};

export default SongsList;
