import Item from "./Item";

import { EmptyView } from "./EmptyView";
import Select from "react-select";
import {  useMemo, useState } from "react";
import { useItemsContext } from "../../lib/hooks";


const sortingOptions = [
  { label: 'Sort by default', value: 'default' },
  { label: 'Sort by packed', value: 'packed' },
  { label: 'Sort by unpacked', value: 'unpacked' },
]

const ItemList : React.FC = () => {

 

// Consume the context 
  const { items, handleDeleteItems, handleToggleItems } = useItemsContext();
  const [sortBy, setSortBy] = useState<string |undefined>("default");


  // Include useMemo() hook for the performance optimization
  const sortedItems = useMemo(() => {
    if (!sortBy) return items;

    return [...items].sort((a, b) => {
      if (sortBy === "packed") return Number(b.packed) - Number(a.packed);
      if (sortBy === "unpacked") return Number(a.packed) - Number(b.packed);
      return 0;
    });
  }, [items, sortBy]);

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
            handleToogleItems={handleToggleItems}
          />
        );
      })}
    </ul>
  );
};

export default ItemList