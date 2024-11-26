import { create } from "zustand";
import { initialItems, ItemType } from "../lib/constants";
import {  persist } from 'zustand/middleware';

export interface ItemsState {
  items: ItemType[];
  addItem: (newItemText: string) => void;
  deleteItem: (id: number) => void;
  toggleItem: (id: number) => void;
  removeAllItems: () => void;
  resetToInitial: () => void;
  markAllAsCompleted: () => void;
  markAllAsInCompleted: () => void;
}

// Create the zustand store
// export const useItemsStore = create<ItemsState>(
//     persist((set) => ({

//   // Initial state
//   items: initialItems,

//   // Add a new item
//   addItem: (newItemText: string) => {
//     const newItem: ItemType = {
//       id: new Date().getTime(),
//       name: newItemText,
//       packed: false,
//     };

//     set((state) => ({ items: [...state.items, newItem] }));
//   },

//   // Delete an item by ID
//   deleteItem: (id: number) => {
//     set((state) => ({
//       items: state.items.filter((item) => item.id !== id),
//     }));
//   },

//   // Toggle the "packed" status of an item
//   toggleItem: (id: number) => {
//     set((state) => ({
//       items: state.items.map((item) =>
//         item.id === id ? { ...item, packed: !item.packed } : item
//       ),
//     }));
//   },

//   removeAllItems: () => {
//     set(() => ({ items: [] }));
//   },

//   resetToInitial: () => {
//     set(() => ({ items: initialItems }));
//   },
//   markAllAsCompleted: () => {
//     set((state) => {
//       const newItems: TInitialItems = state.items.map((item) => {
//         return { ...item, packed: true };
//       });
//       return { items: newItems };
//     });
//   },
//   markAllAsInCompleted: () => {
//     set((state) => {
//       const newItems: TInitialItems = state.items.map((item) => {
//         return { ...item, packed: false };
//       });
//       return { items: newItems };
//     });
//   }, 
// }), {

//     name:"items",
// })
// );

export const useItemsStore = create<ItemsState>()(
    persist(
      (set) => ({
        // Initial state
        items: initialItems,
  
        // Add a new item
        addItem: (newItemText: string) => {
          const newItem: ItemType = {
            id: Date.now(), // Simplified timestamp
            name: newItemText,
            packed: false,
          };
  
          set((state) => ({ items: [...state.items, newItem] }));
        },
  
        // Delete an item by ID
        deleteItem: (id: number) => {
          set((state) => ({
            items: state.items.filter((item) => item.id !== id),
          }));
        },
  
        // Toggle the "packed" status of an item
        toggleItem: (id: number) => {
          set((state) => ({
            items: state.items.map((item) =>
              item.id === id ? { ...item, packed: !item.packed } : item
            ),
          }));
        },
  
        // Remove all items
        removeAllItems: () => {
          set(() => ({ items: [] }));
        },
  
        // Reset to the initial state
        resetToInitial: () => {
          set(() => ({ items: initialItems }));
        },
  
        // Mark all items as completed
        markAllAsCompleted: () => {
          set((state) => ({
            items: state.items.map((item) => ({ ...item, packed: true })),
          }));
        },
  
        // Mark all items as incomplete
        markAllAsInCompleted: () => {
          set((state) => ({
            items: state.items.map((item) => ({ ...item, packed: false })),
          }));
        },
      }),
      {
        name: "items", // Key in localStorage
        partialize: (state) => ({ items: state.items }), // Persist only `items`
      }
    )
  );