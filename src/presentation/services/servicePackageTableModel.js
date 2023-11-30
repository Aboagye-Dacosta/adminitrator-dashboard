import { FaSort } from "react-icons/fa";
import {
  active,
  deleteIcon,
  disable,
  edit,
  visible,
} from "../routes_icons/iconsHolder";

export const servicePackageTableHeaders = [
  {
    Icon: FaSort,
    action: () => {},
    label: "Package Name",
  },
  {
    Icon: FaSort,
    action: () => {},
    label: "Category",
  },
  {
    Icon: "",
    action: () => {},
    label: "Time",
  },
  {
    Icon: FaSort,
    action: () => {},
    label: "Price",
  },
  {
    Icon: FaSort,
    action: () => {},
    label: "Category",
  },
  {
    Icon: "",
    action: () => {},
    label: "City",
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

export const servicePackageTableAction = [
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
