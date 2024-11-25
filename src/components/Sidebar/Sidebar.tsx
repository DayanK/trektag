import { Dispatch, SetStateAction } from "react";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { TInitialItems } from "../../lib/constants";

interface ISidebarProps {
  setItems: Dispatch<SetStateAction<TInitialItems>>
}

const Sidebar: React.FC<ISidebarProps> = ({ setItems }) => {
  return (
    <div className="sidebar">
      <AddItemForm setItems={setItems} />

      <ButtonGroup />
    </div>
  );
};

export default Sidebar