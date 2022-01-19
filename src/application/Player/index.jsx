import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MiniPlayer } from "./MiniPlayer";
import NormalPlayer from "./NormalPlayer";
import { changeFullScreen } from "./store/actionCreator";

const Player = () => {
  const dispatch = useDispatch();
  const fullScreen = useSelector((store) =>
    store.getIn(["player", "fullScreen"])
  );

  const currentSong = {
    al: {
      picUrl:
        "https://p1.music.126.net/JL_id1CFwNJpzgrXwemh4Q==/109951164172892390.jpg",
    },
    name: "木偶人",
    ar: [{ name: "薛之谦" }],
  };

  const toggleFullScreen = useCallback(
    (isFullScreen) => {
      dispatch(changeFullScreen(isFullScreen));
    },
    [dispatch]
  );

  return (
    <div>
      <MiniPlayer
        song={currentSong}
        fullScreen={fullScreen}
        toggleFullScreen={toggleFullScreen}
      />
      <NormalPlayer
        song={currentSong}
        fullScreen={fullScreen}
        toggleFullScreen={toggleFullScreen}
      />
    </div>
  );
};

export default Player;
