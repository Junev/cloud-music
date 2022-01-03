import { useSelector } from "react-redux";
import { TopDescription } from "./style";

const AlbumTopDescription = () => {
  const currentAlbum = useSelector((store) =>
    store.getIn(["album", "currentAlbum"])
  )?.toJS();
  return (
    <TopDescription background={currentAlbum.coverImgUrl}>
      <div className="background">
        <div className="filter" />
      </div>
      <div className="img_wrapper">
        <div className="decorate"></div>
        <img src={currentAlbum.coverImgUrl} alt="" />
        <div className="play_count">
          <i className="iconfont icon-headset"></i>
          <span className="count">
            {Math.floor(currentAlbum.subscribedCount / 1000) / 10} 万
          </span>
        </div>
      </div>
      <div className="desc_wrapper">
        <div className="title">{currentAlbum.name}</div>
        <div className="person">
          <div className="avatar">
            <img src={currentAlbum.creator.avatarUrl} alt="" />
          </div>
          <div className="name">{currentAlbum.creator.nickname}</div>
        </div>
      </div>
    </TopDescription>
  );
};

export default AlbumTopDescription;
