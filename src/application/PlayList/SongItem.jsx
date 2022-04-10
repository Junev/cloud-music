import classNames from "classnames";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../../api/utils";
import { changeCurrentIndex, deleteSong } from "../Player/store/actionCreator";

const SongItem = ({ item, index, isCurrent }) => {
  const dispatch = useDispatch();
  const handleCurrentIndex = useCallback(
    (i) => {
      dispatch(changeCurrentIndex(i));
    },
    [dispatch]
  );

  const handleDeleteSong = useCallback(
    (e, song) => {
      e.stopPropagation();
      dispatch(deleteSong(song));
    },
    [dispatch]
  );

  return (
    <li
      className="item"
      key={item.id}
      onClick={(e) => {
        e.stopPropagation();
        handleCurrentIndex(index);
      }}
    >
      <i
        className={classNames([
          "iconfont",
          { "icon-bofang": isCurrent },
          { current: isCurrent },
        ])}
      />
      <span className="text">
        {item.name} - {getName(item.ar)}
      </span>
      <span className="like">
        <i className="iconfont icon-xihuan2" />
      </span>
      <span
        className="delete"
        onClick={(e) => {
          handleDeleteSong(e, item);
        }}
      >
        <i className="iconfont icon-shanchu" />
      </span>
    </li>
  );
};

export default SongItem;
