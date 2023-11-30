import { FaSort } from "react-icons/fa";
import { tableIcons } from "./iconsHolder";

export const addOnsTableHeaders = [
  {
    Icon: FaSort,
    action: () => {},
    label: "Add-on Name",
  },
  {
    Icon: FaSort,
    action: () => {},
    label: "Category",
  },
  {
    Icon: "",
    action: () => {},
    label: "Sub Category",
  },
  {
    Icon: FaSort,
    action: () => {},
    label: "Package",
  },
  {
    Icon: FaSort,
    action: () => {},
    label: "Time",
  },
  {
    Icon: "",
    action: () => {},
    label: "Price",
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

export const addOnsTableAction = [
  {
    icons: [
      {
        key: "active",
        icon: tableIcons.active,
        handler: () => {},
        colors: {
          light: "bg-green-700",
          dark: "hover:bg-green-900",
        },
      },
      {
        key: "disable",
        icon: tableIcons.disable,
        handler: () => {},
        colors: {
          light: "bg-red-700",
          dark: "hover:bg-red-900",
        },
      },
    ],
  },
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
        key: "delete",
        icon: tableIcons.delete,
        handler: () => {},
        colors: {
          light: "bg-red-700",
          dark: "hover:bg-red-900",
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
