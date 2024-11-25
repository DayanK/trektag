import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useRef, useState } from "react";
import Button from "../Button";
import { TInitialItems, ItemType } from "../../lib/constants";

interface IAddItemForm {
  setItems: Dispatch<SetStateAction<TInitialItems>>
}


const AddItemForm : React.FC<IAddItemForm> = ({ setItems }) => {
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

    const newItem: ItemType = { 
      id: new Date().getTime(),  
      name: itemText, 
      packed: false, }; 
      setItems((prevItems) => [...prevItems, newItem]); 
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
        <Button type="secondary"> Add to list</Button>

    </form>
  )
}

export default AddItemForm