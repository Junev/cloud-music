import { useSelector } from "react-redux";
import { getCount } from "../../api/utils";

const AlbumListOperation = () => {
  const currentAlbum = useSelector((store) =>
    store.getIn(["album", "currentAlbum"])
  )?.toJS();
  return (
    <div className="operation">
      <div className="play_all">
        <i className="iconfont icon-bofang"></i>
        <span>
          播放全部
          <span className="sum">(共{currentAlbum.tracks.length}首)</span>
        </span>
      </div>
      <div className="add_list">
        <i className="iconfont icon-tiajia" />
        <span>收藏（{getCount(currentAlbum.subscribedCount)}）</span>
      </div>
    </div>
  );
};

export default AlbumListOperation;
