import classNames from "classnames";
import { Outlet, NavLink } from "react-router-dom";
import { Top, Nav, NavItem } from "./style";

const Home = () => {
  return (
    <div>
      <Top>
        <span className="iconfont icon-caidan"></span>
        <span className="">Home</span>
        <span className="iconfont icon-41"></span>
      </Top>
      <Nav>
        <NavLink
          to="/recommend"
          className={({ isActive }) => classNames([{ selected: isActive }])}
        >
          <NavItem>
            <span>推荐</span>
          </NavItem>
        </NavLink>
        <NavLink
          to="/singers"
          className={({ isActive }) => classNames([{ selected: isActive }])}
        >
          <NavItem>
            <span>歌手</span>
          </NavItem>
        </NavLink>
        <NavLink
          to="/rank"
          className={({ isActive }) => classNames([{ selected: isActive }])}
        >
          <NavItem>
            <span>排行榜</span>
          </NavItem>
        </NavLink>
      </Nav>
      <Outlet />
    </div>
  );
};

export default Home;
