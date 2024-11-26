import Item from "./Item";

import { TInitialItems } from "../../lib/constants";
import { EmptyView } from "./EmptyView";
import Select from "react-select";
import { useState } from "react";

interface ItemListProps {
  items: TInitialItems;
  handleDeleteItems: (id: number) => void;
  handleToogleItems : (id: number) => void;

}

const sortingOptions = [
  { label: 'Sort by default', value: 'default' },
  { label: 'Sort by packed', value: 'packed' },
  { label: 'Sort by unpacked', value: 'unpacked' },
]

const ItemList: React.FC<ItemListProps> = ({ items, handleDeleteItems, handleToogleItems }) => {

  const [sortBy, setSortBy] = useState<string |undefined>("default");

  const sortedItems =[...items].sort((a,b)=> {
    if(sortBy ==='packed'){
      return Number(b.packed) - Number(a.packed)
    }

    if(sortBy ==='unpacked'){
      return Number(a.packed) - Number(b.packed);
    }

    return 0;
    
  })

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.length > 0 ? (
        <section className="sorting">
          <Select
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
            onChange={(option) => setSortBy(option?.value)}
          />
        </section>
      ) : null}

      {sortedItems.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            handleDeleteItems={handleDeleteItems}
            handleToogleItems={handleToogleItems}
          />
        );
      })}
    </ul>
  );
};

export default ItemList