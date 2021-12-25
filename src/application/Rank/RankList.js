import { List, ListItem, SongList } from "./style";

const RankList = (props) => {
  const { title, list, isGlobalRank = false } = props;

  const renderSongList = (list) => {
    if (list.length) {
      const songItems = list.map((c, i) => (
        <li key={i}>
          {i + 1}. {c.first} - {c.second}
        </li>
      ));
      return <SongList>{songItems}</SongList>;
    }
    return null;
  };

  const renderListItems = (item, i) => (
    <ListItem key={item.coverImgId} tracks={item.tracks}>
      <div className="img_wrapper">
        <img src={item.coverImgUrl} alt={item.coverImgId} />
        <div className="decorate" />
        <span className="update_frequency">{item.updateFrequency}</span>
      </div>
      {renderSongList(item.tracks)}
    </ListItem>
  );

  const listItems = list?.map(renderListItems);

  return (
    <section>
      {title}
      <List isGlobalRank={isGlobalRank}>{listItems}</List>
    </section>
  );
};

export default RankList;
