import React from 'react';

interface ItemProps {
  item: {
    name: string;
    packed: boolean;
  };
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <li className="item">
      <label>
        <input type="checkbox" defaultChecked={item.packed} />
        {item.name}
      </label>

      <button>❌</button>
    </li>
  );
};

export default Item;
