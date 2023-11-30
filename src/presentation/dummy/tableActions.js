import { FaBars, FaBinoculars, FaGamepad, FaMarker } from "react-icons/fa";
import { TiCancelOutline } from "react-icons/ti";

export const testTableActions = [
  {
    icons: [
      {
        key: "FaMarker",
        icon: FaMarker,
        handler: () => {},
        colors: {
          light: "bg-green-700",
          dark: "hover:bg-green-900",
        },
      },
      {
        key: "TiCancelOutline",
        icon: TiCancelOutline,
        handler: () => {},
        colors: {
          light: "bg-red-700",
          dark: "hover:bg-red-900",
        },
      },
    ],
  },
  {
    icons: [
      {
        key: "FaBars",
        icon: FaBars,
        handler: () => {},
        colors: {
          light: "bg-green-700",
          dark: "hover:bg-green-900",
        },
      },
      {
        key: "FaGamepad",
        icon: FaGamepad,
        handler: () => {},
        colors: {
          light: "bg-red-700",
          dark: "hover:bg-red-900",
        },
      },
    ],
  },
  {
    icons: [
      {
        key: "FaBinoculars",
        icon: FaBinoculars,
            handler: () => { },
         colors: {
          light: "bg-orange-700",
          dark: "bg-orange-900",
        },
      },
    ],
  },
];
