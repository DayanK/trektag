import Button from "../Button";
import { ItemsContext } from "../../lib/ItemsContext";
import { useItemsStore } from "../../stores/itemsStore";
ItemsContext

const ButtonGroup = () => {
  const markAllAsCompleted = useItemsStore((state) => state.markAllAsCompleted);
  const markAllAsInCompleted = useItemsStore((state) => state.markAllAsInCompleted);
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: markAllAsCompleted,
    },
    {
      text: "Mark all as incomplete",
      onClick: markAllAsInCompleted,
    },
    {
      text: "Remove all items",
      onClick: removeAllItems,
    },
    {
      text: "Reset to initial",
      onClick: resetToInitial,
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
