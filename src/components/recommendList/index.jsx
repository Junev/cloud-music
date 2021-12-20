import { getCount } from "../../api/utils";
import { ListWrapper, List, ListItem } from "./style";

const RecommendList = (props) => {
  const { recommendList } = props;

  const listItems = recommendList.map((c, i) => (
    <ListItem key={i}>
      <div className="img_wrapper">
        <div className="decorate"></div>
        <img src={c.picUrl} height="100%" width="100%" alt="music" />
        <div className="play_count">
          <i className="iconfont icon-headset play" />
          <span className="count">{getCount(c.playCount)}</span>
        </div>
      </div>
      <div className="desc">{c.name}</div>
    </ListItem>
  ));
  console.log(listItems);
  return (
    <ListWrapper>
      <h1 className="title">推荐歌单</h1>
      <List>{listItems}</List>
    </ListWrapper>
  );
};

export default RecommendList;
