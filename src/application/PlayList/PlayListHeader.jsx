import classNames from "classnames";
import { playMode } from "../Player/config";
import { ListHeader } from "./styles";

const playModes = {
  [playMode.sequence]: {
    icon: "icon-shunxubofang",
    text: "顺序播放",
  },
  [playMode.loop]: {
    icon: "icon-danquxunhuan1",
    text: "单曲循环",
  },
  [playMode.random]: {
    icon: "icon-suiji",
    text: "随机播放",
  },
};

const PlayListHeader = ({ playMode, changeMode }) => {
  const { icon, text } = playModes[playMode];
  return (
    <ListHeader>
      <h1 className="title">
        <div
          className="play-mode"
          onClick={(e) => {
            e.stopPropagation();
            changeMode();
          }}
        >
          <i className={classNames(["iconfont", icon])}></i>
          <span className="text">{text}</span>
        </div>
      </h1>
    </ListHeader>
  );
};

export default PlayListHeader;
