import { FaSort } from "react-icons/fa";
import { tableIcons } from "./iconsHolder";

export const membershipTableHeaders = [
  {
    Icon: FaSort,
    action: () => {},
    label: "Name",
  },
  {
    Icon: FaSort,
    action: () => {},
    label: "Days",
  },
  {
    Icon: "",
    action: () => {},
    label: "Amount",
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

export const membershipTableAction = [
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
];
