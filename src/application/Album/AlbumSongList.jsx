import { useMemo } from "react";
import { useSelector } from "react-redux";
import { SongItem } from "../SongsList/style";
import { getName } from "../../api/utils";

const AlbumSongList = () => {
  const currentAlbum = useSelector((store) =>
    store.getIn(["album", "currentAlbum"])
  )?.toJS();
  const items = useMemo(
    () =>
      currentAlbum.tracks.map((c, i) => (
        <li key={i}>
          <span className="index">{i + 1}</span>
          <div className="info">
            <span>{c.name}</span>
            <span>
              {getName(c.ar)} - {c.al.name}
            </span>
          </div>
        </li>
      )),
    [currentAlbum.tracks]
  );
  return <SongItem>{items}</SongItem>;
};

export default AlbumSongList;
