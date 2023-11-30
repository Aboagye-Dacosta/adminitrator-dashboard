import { FaSort } from "react-icons/fa";
import { active, deleteIcon, disable, edit } from "../routes_icons/iconsHolder";

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
    icons: [active, disable],
  },
  {
    icons: [edit],
  },
  {
    icons: [deleteIcon],
  },
];
