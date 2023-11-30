import { FaSort } from "react-icons/fa";
import { tableIcons } from "./iconsHolder";

export const serviceRequestTableHeaders = [
  {
    Icon: FaSort,
    action: () => {},
    label: "Request Number",
  },
  {
    Icon: FaSort,
    action: () => {},
    label: "Customer Name",
  },
  {
    Icon: "",
    action: () => {},
    label: "Category",
  },
  {
    Icon: FaSort,
    action: () => {},
    label: "Service Provider",
  },
  {
    Icon: FaSort,
    action: () => {},
    label: "Time",
  },
  {
    Icon: "",
    action: () => {},
    label: "Status",
  },
  {
    Icon: FaSort,
    action: () => {},
    label: "Payment Status",
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

export const serviceRequestTableActions = [
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
