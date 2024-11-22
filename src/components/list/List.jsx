import { listData } from "../../lib/dummydata";
import Card from "../card/Card";
import "./list.scss";

const List = () => {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card key={item.id} item={item}></Card>
      ))}
    </div>
  );
};

export default List;
