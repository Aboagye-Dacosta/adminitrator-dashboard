import { FaSort } from "react-icons/fa";
import {
  active,
  deleteIcon,
  disable,
  edit,
  visible,
} from "../routes_icons/iconsHolder";

export const customerListTableHeaders = [
  {
    id: "profilePicture",
    Icon: FaSort,
    action: () => {},
    label: "",
  },
  {
    id: "name",
    Icon: FaSort,
    action: () => {},
    label: "Name",
  },

  {
    id: "email",
    Icon: "",
    action: () => {},
    label: "Email",
  },
  {
    id: "address",
    Icon: "",
    action: () => {},
    label: "Address",
  },
  {
    id: "contact",
    Icon: "",
    action: () => {},
    label: "Contact",
  },
  {
    id: "country",
    Icon: "",
    action: () => {},
    label: "Country",
  },
  {
    id: "dateCreated",
    Icon: FaSort,
    action: () => {},
    label: "Created At",
  },

  // {
  //   id: "",
  //   Icon: "",
  //   action: () => {},
  //   label: "Action",
  // },
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
