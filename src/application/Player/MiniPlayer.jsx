import { useRef, useMemo } from "react";
import { CSSTransition } from "react-transition-group";
import { getName } from "../../api/utils/index.js";
import ProgressCircle from "../../baseUI/progress-circle/index.jsx";
import { MiniPlayerContainer } from "./style.js";

const MiniPlayer = ({
  song,
  fullScreen,
  playing,
  percent,
  clickPlaying,
  toggleFullScreen,
  togglePlayList,
}) => {
  const ref = useRef();

  const playIcon = useMemo(() => {
    if (playing) {
      return <i className="iconfont icon-stop icon-mini" />;
    }
    return <i className="iconfont icon-zanting1 icon-mini" />;
  }, [playing]);

  const handlePlayList = (e) => {
    e.stopPropagation();
    togglePlayList(true);
  };

  return (
    <CSSTransition
      classNames="mini"
      nodeRef={ref}
      in={!fullScreen}
      timeout={400}
      onEnter={() => (ref.current.style.cssText = "display: flex;")}
      onExited={() => (ref.current.style.cssText = "display: none;")}
    >
      <MiniPlayerContainer ref={ref} onClick={() => toggleFullScreen(true)}>
        <div className="icon">
          <div className="imgWrapper">
            <img
              className={`play ${playing ? "" : "pause"}`}
              src={song.al.picUrl + "?param=400x400"}
              alt="img"
              width="40"
              height="40"
            />
          </div>
        </div>
        <div className="text">
          <h2 className="name">{song.name}</h2>
          <p className="desc">{getName(song.ar)}</p>
        </div>
        <div className="control" onClick={(e) => clickPlaying(e)}>
          <ProgressCircle radius={32} percent={percent}>
            {playIcon}
          </ProgressCircle>
        </div>
        <div className="control" onClick={handlePlayList}>
          <i className="iconfont icon-liebiao"></i>
        </div>
      </MiniPlayerContainer>
    </CSSTransition>
  );
};

export { MiniPlayer };
