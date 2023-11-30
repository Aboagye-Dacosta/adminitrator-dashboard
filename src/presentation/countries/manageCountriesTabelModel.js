import { FaSort } from "react-icons/fa";
import { active, deleteIcon, disable, edit, manage } from "../routes_icons/iconsHolder";

export const countriesTableHeaders = [
  {
    Icon: FaSort,
    action: () => {},
    label: "Countries Name",
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

export const countriesTableActions = [
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
    icons: [manage],
  },
];
