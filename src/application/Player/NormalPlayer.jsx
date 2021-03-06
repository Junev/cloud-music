import { useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { formatPlayTime, getName } from "../../api/utils";
import ProgressBar from "../../baseUI/progress-bar";
import { playMode } from "./config";
import {
  NormalPlayerContainer,
  Top,
  Middle,
  CDWrapper,
  Bottom,
  Operators,
  ProgressWrapper,
} from "./style";

// 计算偏移的辅助函数
const _getPosAndScale = () => {
  const targetWidth = 40;
  const paddingLeft = 40;
  const paddingBottom = 30;
  const paddingTop = 80;
  const width = window.innerWidth * 0.8;
  const scale = targetWidth / width;
  // 两个圆心的横坐标距离和纵坐标距离
  const x = -(window.innerWidth / 2 - paddingLeft);
  const y = window.innerHeight - paddingTop - width / 2 - paddingBottom;
  return {
    x,
    y,
    scale,
  };
};

const NormalPlayer = ({
  mode,
  fullScreen,
  playing,
  percent,
  currentTime,
  duration,
  clickPlaying,
  toggleFullScreen,
  onProgressChange,
  handlePrev,
  handleNext,
  changeMode,
  togglePlayList,
}) => {
  const ref = useRef();
  const cdWrapperRef = useRef();

  const song = useSelector((store) =>
    store.getIn(["player", "currentSong"])
  ).toJS();

  let modeIcon;
  if (mode === playMode.sequence) {
    modeIcon = <i className="iconfont icon-shunxubofang" />;
  } else if (mode === playMode.loop) {
    modeIcon = <i className="iconfont icon-danquxunhuan1" />;
  } else {
    modeIcon = <i className="iconfont icon-suiji" />;
  }

  const handlePlayList = () => togglePlayList(true);
  return (
    <CSSTransition
      classNames="normal"
      nodeRef={ref}
      in={fullScreen}
      timeout={400}
      mountOnEnter
      unmountOnExit
      onEnter={() => {
        ref.current.style.cssText = "display: block";
        const { x, y, scale } = _getPosAndScale();

        cdWrapperRef.current.animate(
          [
            {
              transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
              offset: 0,
              easing: "linear",
            },
            {
              transform: `translate3d(0, 0, 0) scale(1.1)`,
              offset: 0.6,
              easing: "linear",
            },
            {
              transform: `translate3d(0, 0, 0) scale(1)`,
              offset: 1,
              easing: "linear",
            },
          ],
          400
        );
        // let start,
        //   previousTimeStamp,
        //   totalDuration = 400;
        // function step(timestamp) {
        //   if (start === undefined) {
        //     start = timestamp;
        //   }
        //   const elapsed = timestamp - start;

        //   if (previousTimeStamp !== timestamp) {
        //     const currentX = Math.floor((1 - elapsed / totalDuration) * x);
        //     const currentY = Math.floor((1 - elapsed / totalDuration) * y);
        //     const currentScale =
        //       elapsed > 300 && elapsed < 310 ? 1.1 : elapsed / totalDuration;
        //     cdWrapperRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${currentScale})`;
        //   }

        //   if (elapsed < totalDuration) {
        //     previousTimeStamp = timestamp;
        //     window.requestAnimationFrame(step);
        //   }
        // }

        // window.requestAnimationFrame(step);
      }}
      onExit={() => {
        if (!cdWrapperRef.current) return;
        const cdWrapperDom = cdWrapperRef.current;
        cdWrapperDom.style.transition = "all 0.4s";
        const { x, y, scale } = _getPosAndScale();
        cdWrapperDom.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
      }}
      onExited={() => {
        if (!cdWrapperRef.current) return;
        const cdWrapperDom = cdWrapperRef.current;
        cdWrapperDom.style.transition = "";
        cdWrapperDom.style.transform = "";
        // 一定要注意现在要把 normalPlayer 这个 DOM 给隐藏掉，因为 CSSTransition 的工作只是把动画执行一遍
        // 不置为 none 现在全屏播放器页面还是存在
        ref.current.style.display = "none";
      }}
    >
      <NormalPlayerContainer ref={ref}>
        <div className="background">
          <img
            src={song.al.picUrl + "?param=300x300"}
            alt="歌曲图片"
            width="100%"
            height="100%"
          />
        </div>
        <div className="background layer"></div>
        <Top className="top">
          <div className="back" onClick={() => toggleFullScreen(false)}>
            <i className="iconfont icon-jiantou icon-back"></i>
          </div>
          <h1 className="title">{song.name}</h1>
          <h2 className="subtitle">{getName(song.ar)}</h2>
        </Top>
        <Middle>
          <CDWrapper ref={cdWrapperRef}>
            <div className="cd">
              <img
                className={`image play ${playing ? "" : "pause"}`}
                src={song.al.picUrl + "?param=400x400"}
                alt=""
              />
            </div>
          </CDWrapper>
        </Middle>
        <Bottom className="bottom">
          <ProgressWrapper>
            <span className="time time-l">{formatPlayTime(currentTime)}</span>
            <div className="progress-bar-wrapper">
              <ProgressBar
                percent={percent}
                onProgressChange={onProgressChange}
              />
            </div>
            <span className="time time-r">{formatPlayTime(duration)}</span>
          </ProgressWrapper>
          <Operators>
            <div className="icon i-left" onClick={changeMode}>
              {modeIcon}
            </div>
            <div className="icon i-left">
              <i className="iconfont icon-shangyiqu101" onClick={handlePrev} />
            </div>
            <div className="icon i-center">
              {playing ? (
                <i
                  className="iconfont icon-plus-pause"
                  onClick={clickPlaying}
                />
              ) : (
                <i className="iconfont icon-bofang1" onClick={clickPlaying} />
              )}
            </div>
            <div className="icon i-right">
              <i className="iconfont icon-xiayiqu101" onClick={handleNext} />
            </div>
            <div className="icon i-right">
              <i className="iconfont icon-liebiao" onClick={handlePlayList} />
            </div>
          </Operators>
        </Bottom>
      </NormalPlayerContainer>
    </CSSTransition>
  );
};

export default NormalPlayer;
