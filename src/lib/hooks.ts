import { useContext } from "react";
import { ItemType } from "./constants";
import { ItemsContext } from "./ItemsContext";

export interface ItemsContextType {
    items: ItemType[];
    handleAddItems: (newItemText: string) => void;
    handleDeleteItems: (id: number) => void;
    handleToggleItems: (id: number) => void;
    handleMarkAllAsCompleted: () => void;
    handleMarkAllAsInCompleted: () => void;
    handleResetToInitial: () => void;
    handleRemoveAllItems: () => void;
  }
  
  
  
export function useItemsContext() {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error("ItemList must be used within a ItemsContextProvider");
  }

  return context;
}