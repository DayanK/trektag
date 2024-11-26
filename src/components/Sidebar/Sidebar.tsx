import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

interface ISidebarProps {
  handleAddItems: (itemText: string) => void;
  
  handleRemoveAllItems: () => void;
  handleResetToInitial: () => void;
  handleMarkAllAsCompleted: () => void;
  handleMarkAllAsInCompleted: () => void
}

const Sidebar: React.FC<ISidebarProps> = ({ handleAddItems,  handleMarkAllAsCompleted, handleResetToInitial,handleRemoveAllItems, handleMarkAllAsInCompleted}) => {
  return (
    <div className="sidebar">
      <AddItemForm onAddItems={handleAddItems} />

      <ButtonGroup 
        handleAddItems={handleAddItems}
        handleMarkAllAsCompleted= {handleMarkAllAsCompleted}
        handleMarkAllAsInCompleted= {handleMarkAllAsInCompleted}
        handleRemoveAllItems= {handleRemoveAllItems}
        handleResetToInitial= {handleResetToInitial}
      />
    </div>
  );
};

export default Sidebar