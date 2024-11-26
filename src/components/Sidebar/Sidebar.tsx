import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { useItemsStore } from "../../stores/itemsStore";


const Sidebar = () => {
  const addItem = useItemsStore((state) => state.addItem);
  
  return (
    <div className="sidebar">
      <AddItemForm onAddItems={addItem} />

      <ButtonGroup />
    </div>
  );
};

export default Sidebar;