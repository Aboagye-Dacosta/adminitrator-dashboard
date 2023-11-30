import { FaSort } from "react-icons/fa";
import {
  active,
  deleteIcon,
  disable,
  edit,
  track,
  visible,
} from "../routes_icons/iconsHolder";

export const serviceProviderTableHeaders = [
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
    Icon: FaSort,
    action: () => {},
    label: "Contact Number",
  },
  {
    Icon: "",
    action: () => {},
    label: "Active Plan",
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

export const serviceProviderTableAction = [
  {
    icons: [track],
  },
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
