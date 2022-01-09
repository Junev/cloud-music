import { SongList } from "./style";
import List from "./SongList";
import ListOperation from "./ListOperation";

const SongsList = (props) => {
  const { songs, subscribedCount } = props;

  return (
    <SongList>
      <ListOperation total={songs.length} subscribedCount={subscribedCount} />
      <List songs={songs} />
    </SongList>
  );
};

export default SongsList;
