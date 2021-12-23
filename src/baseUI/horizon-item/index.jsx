import classNames from "classnames";
import Scroll from "../../components/scroll";
import { List, ListItem } from "./style";

const HorizonItem = (props) => {
  const { title = "", list = [], value = "", onClick } = props;

  const listItems = list.map((c, i) => (
    <ListItem
      key={i}
      className={classNames({ selected: value === c.key })}
      onClick={() => onClick(c.key)}
    >
      {c.name}
    </ListItem>
  ));

  return (
    <Scroll direction="horizontal" contentStyle={{ width: "fit-content" }}>
      <List>
        <span>{title}</span>
        {listItems}
      </List>
    </Scroll>
  );
};

export default HorizonItem;
