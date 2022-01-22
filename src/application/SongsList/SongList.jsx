import { useMemo } from "react";
import { SongItem } from "./style";

const getName = (strArr) =>
  strArr.reduce(
    (pre, cur, i) => (i === 0 ? cur.name : pre + "/" + cur.name),
    ""
  );

const SongList = (props) => {
  const { songs, selectItem } = props;
  const items = useMemo(
    () =>
      songs.map((c, i) => (
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
    [songs]
  );
  return (
    <SongItem onClick={(e) => selectItem(e.clientX, e.clientY)}>
      {items}
    </SongItem>
  );
};

export default SongList;
