import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import ItemList from "./components/ItemsList/ItemList";
import Sidebar from "./components/Sidebar/Sidebar";
import { initialItems, ItemType, TInitialItems } from "./lib/constants";

function App() {
  const [items, setItems] = useState<ItemType[]>(initialItems);

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

  const handleToogleItems = (id:number) => {

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




  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList
          items={items}
          handleDeleteItems={handleDeleteItems}
          handleToogleItems={handleToogleItems}
        />
        <Sidebar
          handleAddItems={handleAddItems}
          handleMarkAllAsCompleted={handleMarkAllAsCompleted}
          handleMarkAllAsInCompleted={handleMarkAllAsInCompleted}
          handleResetToInitial={handleResetToInitial}
          handleRemoveAllItems={handleRemoveAllItems}
        />
      </main>

      <Footer />
    </>
  );
}

export default App
