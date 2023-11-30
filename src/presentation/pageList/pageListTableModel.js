import { FaSort } from "react-icons/fa";
import { edit, visible } from "../routes_icons/iconsHolder";

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
    icons: [edit],
  },
  {
    icons: [visible],
  },
];
