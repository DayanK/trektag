import  { ReactNode, useEffect, useState } from 'react'
import { initialItems, ItemType, TInitialItems } from '../lib/constants';
import { ItemsContext } from '../lib/ItemsContext';


// Define the props type for the provider
interface ItemsContextProviderProps { 
    children: ReactNode;
}


export const ItemsContextProvider: React.FC<ItemsContextProviderProps> = ({ children}) => {
  const [items, setItems] = useState<ItemType[]>(()=> JSON.parse(localStorage.getItem('items') || '[]') as ItemType[]|| initialItems);

  const handleAddItems = (newItemText: string ) => {
    
    const newItem: ItemType = { 
      id: new Date().getTime(),  
      name: newItemText, 
      packed: false
    };

    const newItems = [...items, newItem];
    setItems(newItems)

  };

  const handleDeleteItems = (id: number) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems)
  }

  const handleToggleItems = (id:number) => {

    const newItems = items.map((item) => {

        if(item.id === id){
          return {...item, packed: !item.packed};
        }

        return item

    });

    setItems(newItems)
  }

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems)
  };

  const handleMarkAllAsCompleted  = () => {
    const newItems : TInitialItems = items.map((item) =>{
       return {...item, packed: true}
    });
    console.log(newItems)


    setItems(newItems);
  }

  const handleMarkAllAsInCompleted = () => {
    const newItems: TInitialItems = items.map((item) => {
      return { ...item, packed: false };
    });

    setItems(newItems);
    console.log("Marked all as incomplete: ", newItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider value={{
        items,
        handleAddItems,
        handleDeleteItems,
        handleToggleItems,
        handleMarkAllAsCompleted,
        handleMarkAllAsInCompleted,
        handleResetToInitial,
        handleRemoveAllItems

    }}>
        {children}
    </ItemsContext.Provider>
  )
}
