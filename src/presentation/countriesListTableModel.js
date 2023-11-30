import { FaSort } from "react-icons/fa";
import { tableIcons } from "./iconsHolder";

export const countriesListTableHeaders = [
  {
    Icon: FaSort,
    action: () => {},
    label: "Page Title",
  },
  {
    Icon: FaSort,
    action: () => {},
    label: "Date",
  },

  {
    Icon: "",
    action: () => {},
    label: "Action",
  },
];

export const countriesListTableAction = [
 
  {
    icons: [
      {
        key: "edit",
        icon: tableIcons.edit,
        handler: () => {},
        colors: {
          light: "bg-primary",
          dark: "hover:bg-orange-900",
        },
      },
    ],
  },

  {
    icons: [
      {
        key: "visible",
        icon: tableIcons.visible,
        handler: () => {},
        colors: {
          light: "bg-blue-700",
          dark: "hover:bg-blue-900",
        },
      },
    ],
  },
];
