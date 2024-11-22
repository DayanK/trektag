import Button from "../Button";


const ButtonGroup = () => {
  const secondaryButtons: string[] = [
    "Mark all as complete",
    "Mark all as incomplete",
    "Reset to initial",
    "Remove all items"
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map((text) => (
        <Button key={text} type="secondary">
          {text}
        </Button>
      ))}
    </section>
  );
};

export default ButtonGroup;
