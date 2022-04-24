import { useState, useCallback, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hackGetSongUrl, shuffle } from "../../api/utils";
import { MiniPlayer } from "./MiniPlayer";
import NormalPlayer from "./NormalPlayer";
import Toast from "../../baseUI/toast";
import {
  changeCurrentIndex,
  changeFullScreen,
  changePlayingState,
  changePlayList,
  changePlayMode,
  changeShowPlayList,
} from "./store/actionCreator";
import { playMode } from "./config";
import PlayList from "../PlayList";
import { getSongUrl } from "../../api/request";

const Player = () => {
  const dispatch = useDispatch();

  const playing = useSelector((store) => store.getIn(["player", "playing"]));
  const fullScreen = useSelector((store) =>
    store.getIn(["player", "fullScreen"])
  );
  const mode = useSelector((store) => store.getIn(["player", "mode"]));

  const audioRef = useRef();
  const sequencePlayListIm = useSelector((store) =>
    store.getIn(["player", "sequencePlayList"])
  );
  const playListIm = useSelector((store) =>
    store.getIn(["player", "playList"])
  );
  const currentIndex = useSelector((store) =>
    store.getIn(["player", "currentIndex"])
  );
  const currentSongIm = useSelector((store) =>
    store.getIn(["player", "currentSong"])
  );
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const percent = isNaN(currentTime / duration) ? 0 : currentTime / duration;

  const toggleFullScreen = useCallback(
    (isFullScreen) => {
      dispatch(changeFullScreen(isFullScreen));
    },
    [dispatch]
  );

  const togglePlayList = useCallback(
    (visible) => dispatch(changeShowPlayList(visible)),
    [dispatch]
  );

  const toastRef = useRef();
  let modeText;
  if (mode === 0) {
    modeText = "顺序播放";
  } else if (mode === 1) {
    modeText = "单曲循环";
  } else {
    modeText = "随机播放";
  }

  const changeMode = useCallback(() => {
    const currentSong = currentSongIm.toJS();
    const newMode = (mode + 1) % 3;
    const sequencePlayList = sequencePlayListIm?.toJS();
    if (newMode === playMode.sequence) {
      dispatch(changePlayList(sequencePlayList));
      const index = sequencePlayList.findIndex((c) => c.id === currentSong.id);
      dispatch(changeCurrentIndex(index));
    } else if (newMode === playMode.loop) {
      dispatch(changePlayList(sequencePlayList));
    } else {
      const newPlayList = shuffle(sequencePlayList);
      const index = newPlayList.findIndex((c) => c.id === currentSong.id);
      dispatch(changePlayList(newPlayList));
      dispatch(changeCurrentIndex(index));
    }
    dispatch(changePlayMode(newMode));
    // toastRef.current.show();
  }, [currentSongIm, dispatch, mode, sequencePlayListIm]);

  const clickPlaying = useCallback(
    (e) => {
      e.stopPropagation();
      dispatch(changePlayingState(!playing));

      if (!playing) {
        audioRef.current.play();
        setCurrentTime(0);
      } else {
        audioRef.current.pause();
      }
    },
    [dispatch, playing]
  );

  const onProgressChange = useCallback(
    (percent) => {
      const time = percent * duration;
      setCurrentTime(time);

      audioRef.current.currentTime = time;
    },
    [duration]
  );

  useEffect(() => {
    const currentSong = currentSongIm.toJS();
    if (currentSong?.id) {
      setDuration(currentSong.dt / 1000 || 0);

      (async function getMusicUrl() {
        const { data } = await getSongUrl(currentSong.id);
        audioRef.current.pause();
        if (data[0].url) {
          audioRef.current.src = data[0].url;
        } else {
          audioRef.current.src = hackGetSongUrl(currentSong.id);
        }
        audioRef.current.play();
      })();
    }
  }, [currentSongIm]);

  const handleLoop = useCallback(() => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    changePlayingState(true);
  }, []);

  const handlePrev = useCallback(() => {
    const playList = playListIm.toJS();
    if (Array.isArray(playList) && playList.length === 0) {
      handleLoop();
      return;
    }

    dispatch(
      changeCurrentIndex(
        currentIndex > 0 ? currentIndex - 1 : playList.length - 1
      )
    );
    if (!playing) {
      changePlayingState(true);
    }
  }, [currentIndex, dispatch, handleLoop, playListIm, playing]);

  const handleNext = useCallback(() => {
    const playList = playListIm.toJS();
    if (Array.isArray(playList) && playList.length === 0) {
      handleLoop();
      return;
    }

    dispatch(
      changeCurrentIndex(
        currentIndex < playList.length - 1 ? currentIndex + 1 : 0
      )
    );
    if (!playing) {
      changePlayingState(true);
    }
  }, [currentIndex, dispatch, handleLoop, playListIm, playing]);

  const handleEnded = useCallback(
    (e) => {
      if (mode === playMode.loop) {
        handleLoop();
      } else {
        handleNext();
      }
    },
    [handleLoop, handleNext, mode]
  );

  return (
    <div>
      <MiniPlayer
        percent={percent}
        playing={playing}
        fullScreen={fullScreen}
        toggleFullScreen={toggleFullScreen}
        clickPlaying={clickPlaying}
        togglePlayList={togglePlayList}
      />
      <NormalPlayer
        percent={percent}
        currentTime={currentTime}
        duration={duration}
        playing={playing}
        mode={mode}
        fullScreen={fullScreen}
        toggleFullScreen={toggleFullScreen}
        clickPlaying={clickPlaying}
        onProgressChange={onProgressChange}
        handlePrev={handlePrev}
        handleNext={handleNext}
        changeMode={changeMode}
        togglePlayList={togglePlayList}
      />
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onEnded={handleEnded}
      />
      <Toast ref={toastRef}>{modeText}</Toast>
      <PlayList changeMode={changeMode} />
    </div>
  );
};

export default Player;
