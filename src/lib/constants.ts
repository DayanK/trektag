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

 export const secondaryButtons: string[] = [
    "Mark all as complete",
    "Mark all as incomplete",
    "Reset to initial",
    "Remove all items"
  ];

  