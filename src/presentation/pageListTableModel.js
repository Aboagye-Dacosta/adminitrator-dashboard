import { FaSort } from "react-icons/fa";
import { tableIcons } from "./iconsHolder";

export const pageListHeaders = [
  {
    Icon: FaSort,
    action: () => {},
    label: "Page Titile",
  },
  {
    Icon: FaSort,
    action: () => {},
    label: "Date",
  },
  {
    Icon: "",
    action: () => {},
    label: "Actions",
  },
];

export const pageListActions = [
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
          light: "bg-primary",
          dark: "hover:bg-orange-900",
        },
      },
    ],
  },
];