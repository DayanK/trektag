import { ChangeEvent, FormEvent, useRef, useState } from "react";
import Button from "../Button";

interface IAddItemForm {
  onAddItems: (itemText: string) => void;
}


const AddItemForm : React.FC<IAddItemForm> = ({ onAddItems }) => {
  const [itemText, setItemText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setItemText(event.target.value);
  };

  const handlerSubmit = (event: FormEvent) => { 
    event.preventDefault(); 

    // input validation
    if(!itemText){
      alert("Item can't be empty");
      inputRef.current?.focus();
      return  // permet de stopper la function AddItemForm et empecher le block de continuer
    }


    onAddItems(itemText)
    setItemText(""); 
  }

  return (
    <form onSubmit={handlerSubmit}>
        <h2>Add an item</h2>
        <input 
          ref={inputRef}
          value={itemText}
          onChange={handleChange}
          autoFocus={true} 
        />
        <Button buttonType="secondary" > Add to list</Button>

    </form>
  )
}

export default AddItemForm