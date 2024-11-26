import Button from "../Button";
import { ItemsContext } from "../../lib/ItemsContext";
import { useItemsContext } from "../../lib/hooks";
ItemsContext

const ButtonGroup = () => {
  

  const {  handleMarkAllAsCompleted, handleMarkAllAsInCompleted, handleRemoveAllItems, handleResetToInitial } = useItemsContext();


  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: handleMarkAllAsCompleted,
    },
    {
      text: "Mark all as incomplete",
      onClick: handleMarkAllAsInCompleted,
    },
    {
      text: "Remove all items",
      onClick: handleRemoveAllItems,
    },
    {
      text: "Reset to initial",
      onClick: handleResetToInitial,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map((button) => (
        <Button 
          key={button.text + button.text.toString()} 
          buttonType="secondary" 
          onClick={button.onClick}>
          {button.text}
        </Button>
      ))}
    </section>
  );
};

export default ButtonGroup;
