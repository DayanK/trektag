import Item from "./Item";

import { TInitialItems } from "../../lib/constants";

interface ItemListProps {
  items: TInitialItems;
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default ItemList