// import { secondaryButtons } from "../../lib/constants";
import Button from "../Button";


interface IButtGroupProps {
  handleAddItems: (itemText: string) => void; 
  handleMarkAllAsCompleted: () => void; 
  handleMarkAllAsInCompleted: () => void; 
  handleResetToInitial: () => void; 
  handleRemoveAllItems: () => void;
}



const ButtonGroup: React.FC<IButtGroupProps> = ({
  handleMarkAllAsCompleted,
  handleMarkAllAsInCompleted,
  handleRemoveAllItems,
  handleResetToInitial,
}) => {
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
