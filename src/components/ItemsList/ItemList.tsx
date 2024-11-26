import Item from "./Item";

import { TInitialItems } from "../../lib/constants";

interface ItemListProps {
  items: TInitialItems;
  handleDeleteItems: (id: number) => void;
  handleToogleItems : (id: number) => void;

}

const ItemList: React.FC<ItemListProps> = ({ items, handleDeleteItems, handleToogleItems }) => {
  return (
    <ul>
      {items.map((item) => {
        return <Item 
          key={item.id} 
          item={item} 
          handleDeleteItems={handleDeleteItems}
          handleToogleItems={handleToogleItems}
          />;
      })}
    </ul>
  );
};

export default ItemList