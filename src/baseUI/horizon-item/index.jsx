import classNames from "classnames";
import { useEffect, useRef } from "react";
import Scroll from "../../components/scroll";
import { List, ListItem } from "./style";

const HorizonItem = (props) => {
  const { title = "", list = [], value = "", onClick } = props;

  const ref = useRef();

  useEffect(() => {
    const node = ref.current;

    const handleClick = (e) => {
      let el = e.target;
      while (!el.matches("span[data-key]")) {
        if (node === el) {
          el = null;
          return;
        }
        el = el.parentNode;
      }

      onClick(el.dataset.key);
    };
    node.addEventListener("click", handleClick);
    return () => {
      node.removeEventListener("click", handleClick);
    };
  }, [onClick]);

  const listItems = list.map((c, i) => (
    <ListItem
      key={i}
      className={classNames({ selected: value === c.key })}
      data-key={c.key}
      // onClick={() => onClick(c.key)}
    >
      {c.name}
    </ListItem>
  ));

  return (
    <Scroll direction="horizontal" contentStyle={{ width: "fit-content" }}>
      <List ref={ref}>
        <span>{title}</span>
        {listItems}
      </List>
    </Scroll>
  );
};

export default HorizonItem;
