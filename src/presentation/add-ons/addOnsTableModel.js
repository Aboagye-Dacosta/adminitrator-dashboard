import { FaSort } from "react-icons/fa";
import { active, deleteIcon, disable, edit, visible } from "../routes_icons/iconsHolder";

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
    icons: [active, disable],
  },
  {
    icons: [edit],
  },
  {
    icons: [deleteIcon],
  },
  {
    icons: [visible],
  },
];
