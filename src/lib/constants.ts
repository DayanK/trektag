export type ItemType = {
    id: number;
    name: string;
    packed: boolean;
  };
  
export type TInitialItems = ItemType[];
  
 export const initialItems : TInitialItems = [
    {
      id:1,
      name: "good mood",
      packed: true,
    },
    {
      id:2,
      name: "passport",
      packed: false,
    },
    {
      id:3,
      name: "phone charger",
      packed: false,
    },
  ];

 export const secondaryButtons = [
   {
     text: "Mark all as complete",
     onClick: "handleMarkAllAsCompleted",
   },
   {
     text: "Mark all as incomplete",
     onClick: "handleMarkAllAsInCompleted",
   },
   {
     text: "Remove all items",
     onClick: "handleRemoveAllItems",
   },
   {
     text: "Reset to initial",
     onClick: "handleResetToInitial",
   },
 ];

  