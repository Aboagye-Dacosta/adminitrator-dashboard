import { FaSort } from "react-icons/fa";
import { active, deleteIcon, disable, edit, visible } from "../routes_icons/iconsHolder";

export const customerListTableHeaders = [
  {
    Icon: FaSort,
    action: () => {},
    label: "First Name",
  },
  {
    Icon: FaSort,
    action: () => {},
    label: "Email Address",
  },
  {
    Icon: "",
    action: () => {},
    label: "Email Address",
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

export const customerListTableAction = [
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
