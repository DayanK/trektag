import React from 'react';

interface ItemProps {
  item: {
    id:number,
    name: string;
    packed: boolean;
  };
  handleDeleteItems : (id: number) => void;
  handleToogleItems : (id: number) => void;

}

const Item: React.FC<ItemProps> = ({ item, handleDeleteItems, handleToogleItems }) => {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={item.packed} onClick={()=>handleToogleItems(item.id)} />
        {item.name}
      </label>

      <button onClick={() => handleDeleteItems(item.id)}>❌</button>
    </li>
  );
};

export default Item;
