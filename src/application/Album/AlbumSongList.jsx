import { useMemo } from "react";
import { currentAlbum } from ".";
import { SongItem } from "./style";

const getName = (strArr) =>
  strArr.reduce(
    (pre, cur, i) => (i === 0 ? cur.name : pre + "/" + cur.name),
    ""
  );

const AlbumSongList = () => {
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
    []
  );
  return <SongItem>{items}</SongItem>;
};

export default AlbumSongList;
