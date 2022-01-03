import { Menu } from "./style";

const AlbumMenu = () => {
  return (
    <Menu>
      <div>
        <i className="iconfont icon-pinglun" />
        评论
      </div>
      <div>
        <i className="iconfont icon-xihuan1" />
        收藏
      </div>
      <div>
        <i className="iconfont icon-tianjia" />
        点赞
      </div>
      <div>
        <i className="iconfont icon-youcecaidan" />
        更多
      </div>
    </Menu>
  );
};

export default AlbumMenu;
