import { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  changePlayList,
  changeSequencePlayList,
} from "../Player/store/actionCreator";
import { SongList } from "./style";
import List from "./SongList";
import ListOperation from "./ListOperation";
import { delegate } from "../../api/utils";

const SongsList = (props) => {
  const { songs, subscribedCount, startMusicAnimation } = props;
  const ulDOMRef = useRef();

  const dispatch = useDispatch();
  const selectItem = useCallback(
    (x, y) => {
      dispatch(changePlayList(songs));
      dispatch(changeSequencePlayList(songs));
      startMusicAnimation(x, y);
    },
    [dispatch, songs, startMusicAnimation]
  );

  useEffect(() => {
    const ulDOM = ulDOMRef.current;
    const unlisten = delegate(ulDOM, "li", function click(e, i) {
      console.log(e, i);
    });
    return () => {
      unlisten();
    };
  }, []);

  return (
    <SongList>
      <ListOperation total={songs.length} subscribedCount={subscribedCount} />
      <List ref={ulDOMRef} songs={songs} selectItem={selectItem} />
    </SongList>
  );
};

export default SongsList;
