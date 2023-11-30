import { FaSort } from "react-icons/fa";
import { edit, visible } from "../routes_icons/iconsHolder";

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
    icons: [edit],
  },

  {
    icons: [visible],
  },
];
