import { createContext } from "react";
import { ItemType } from "./constants";

// Create the context with a default value

interface ItemsContextType {
    items: ItemType[];
    handleAddItems: (newItemText: string) => void;
    handleDeleteItems: (id: number) => void;
    handleToggleItems: (id: number) => void;
    handleMarkAllAsCompleted: () => void;
    handleMarkAllAsInCompleted: () => void;
    handleResetToInitial: () => void;
    handleRemoveAllItems: () => void;
  }

  

export const ItemsContext = createContext<ItemsContextType | undefined>(undefined);
