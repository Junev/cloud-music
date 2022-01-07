import SongList from "./SongList";
import ListOperation from "./ListOperation";

const SongsList = (props) => {
  const { songs, subscribedCount } = props;

  return (
    <>
      <ListOperation total={songs.length} subscribedCount={subscribedCount} />
      <SongList songs={songs} />
    </>
  );
};

export default SongsList;
