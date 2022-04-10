import { useRef } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import Scroll from "../../components/scroll";
import { changeShowPlayList } from "../Player/store/actionCreator";
import PlayListHeader from "./PlayListHeader";
import SongItem from "./SongItem";
import {
  ListContent,
  ListHeader,
  PlayListWrapper,
  ScrollWrapper,
} from "./styles";

const PlayList = ({ changeMode }) => {
  const visible = useSelector((store) =>
    store.getIn(["player", "showPlayList"])
  );

  const currentSong = useSelector((store) =>
    store.getIn(["player", "playList"])
  ).toJS();
  const currentIndex = useSelector((store) =>
    store.getIn(["player", "currentIndex"])
  );
  const playList = useSelector((store) =>
    store.getIn(["player", "playList"])
  ).toJS();
  const sequencePlayList = useSelector((store) =>
    store.getIn(["player", "sequencePlayList"])
  );
  const playMode = useSelector((store) => store.getIn(["player", "mode"]));

  const dispatch = useDispatch();
  const closePlayList = useCallback(() => {
    dispatch(changeShowPlayList(false));
  }, [dispatch]);

  const changeCurrentIndex = useCallback(
    (index) => {
      dispatch(changeCurrentIndex(index));
    },
    [dispatch]
  );

  const changePlayMode = useCallback(
    (mode) => {
      dispatch(changePlayMode(mode));
    },
    [dispatch]
  );

  const changePlayList = useCallback(
    (list) => {
      dispatch(changePlayList(list));
    },
    [dispatch]
  );

  const playlistRef = useRef();
  const onEnter = useCallback(() => {}, []);
  const onEntering = useCallback(() => {}, []);
  const onExiting = useCallback(() => {}, []);
  const onExited = useCallback(() => {}, []);

  return (
    <CSSTransition
      nodeRef={playlistRef}
      in={visible}
      timeout={300}
      classNames="list-fade"
      onEnter={onEnter}
      onEntering={onEntering}
      onExiting={onExiting}
      onExited={onExited}
      unmountOnExit
    >
      <PlayListWrapper ref={playlistRef} onClick={closePlayList}>
        <div className="list-wrapper">
          <PlayListHeader playMode={playMode} changeMode={changeMode} />
          <ScrollWrapper>
            <Scroll>
              <ListContent>
                {playList.map((item, index) => (
                  <SongItem
                    key={item.id}
                    index={index}
                    item={item}
                    isCurrent={index === currentIndex}
                  />
                ))}
              </ListContent>
            </Scroll>
          </ScrollWrapper>
        </div>
      </PlayListWrapper>
    </CSSTransition>
  );
};

export default PlayList;
