import { getCount } from "../../api/utils";

const ListOperation = (props) => {
  const { total, subscribedCount } = props;
  return (
    <div className="operation">
      <div className="play_all">
        <i className="iconfont icon-bofang"></i>
        <span>
          播放全部
          <span className="sum">(共{total}首)</span>
        </span>
      </div>
      <div className="add_list">
        <i className="iconfont icon-tiajia" />
        <span>收藏（{getCount(subscribedCount)}）</span>
      </div>
    </div>
  );
};

export default ListOperation;
