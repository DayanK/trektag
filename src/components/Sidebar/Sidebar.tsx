import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { useItemsContext } from "../../lib/hooks";


const Sidebar = () => {
  const { handleAddItems } = useItemsContext();

  return (
    <div className="sidebar">
      <AddItemForm  onAddItems={handleAddItems}/>

      <ButtonGroup 
       
      />
    </div>
  );
};

export default Sidebar