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
    id: "profilePicture",
    Icon: "",
    action: () => {},
    label: "",
  },
  {
    id: "name",
    Icon: FaSort,
    action: () => {},
    label: "First Name",
  },
  {
    id: "email",
    Icon: FaSort,
    action: () => {},
    label: "Email",
  },
  {
    id: "contact",
    Icon: FaSort,
    action: () => {},
    label: "Contact",
  },
  {
    id: "address",
    Icon: "",
    action: () => {},
    label: "Address",
  },
  {
    id: "country",
    Icon: FaSort,
    action: () => {},
    label: "Country",
  },

  {
    id: "dateCreated",
    Icon: "",
    action: () => {},
    label: "Action",
  },
  {
    id: "Availability",
    Icon: "",
    action: () => {},
    label: "Availability",
  },
  {
    id: "Package",
    Icon: "",
    action: () => {},
    label: "Package",
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
