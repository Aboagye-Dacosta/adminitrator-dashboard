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
    Icon: "",
    action: () => {},
    label: "",
  },
  {
    id: "name",
    Icon: "",
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
    Icon: "",
    action: () => {},
    label: "Created At",
  },
  // {
  //   id: "actions",
  //   Icon: "",
  //   action: () => {},
  //   label: "Action",
  // },
];

export const customerListTableAction = [
  {
    icons: [disable, active],
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
