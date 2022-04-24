import React, { useMemo } from "react";
import { SongItemList } from "./style";

const getName = (strArr) =>
  strArr.reduce(
    (pre, cur, i) => (i === 0 ? cur.name : pre + "/" + cur.name),
    ""
  );

const SongList = (props, ref) => {
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
    <SongItemList ref={ref} onClick={(e) => selectItem(e.clientX, e.clientY)}>
      {items}
    </SongItemList>
  );
};

export default React.forwardRef(SongList);
