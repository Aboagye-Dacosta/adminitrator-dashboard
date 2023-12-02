import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import {
  FaAngleDoubleDown,
  FaCheck,
  FaEye,
  FaLock,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosColorPalette, IoIosLogOut } from "react-icons/io";
import {
  IoCloseOutline,
  IoPencil,
  IoPerson,
  IoRadioButtonOffSharp,
} from "react-icons/io5";
import { LuClock, LuNetwork } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { TiCancel } from "react-icons/ti";

export const tableIcons = {
  active: FaCheck,
  disable: TiCancel,
  visible: FaEye,
  edit: IoPencil,
  delete: MdDelete,
  manage: LuNetwork,
  track: LuClock,
  person: IoPerson,
  locked: FaLock,
  forward: FaRegArrowAltCircleRight,
  sidebar: BsLayoutSidebarInsetReverse,
  bars: GiHamburgerMenu,
  logout: IoIosLogOut,
  dashboard: IoIosColorPalette,
  circle: IoRadioButtonOffSharp,
  angleDown: FaAngleDoubleDown,
  close: IoCloseOutline,
};

export const active = {
  key: "active",
  icon: tableIcons.active,
  handler: () => {},
  colors: {
    light: "bg-green-600",
    dark: "hover:bg-green-900",
  },
};
export const disable = {
  key: "disable",
  icon: tableIcons.disable,
  handler: () => {},
  colors: {
    light: "bg-red-700",
    dark: "hover:bg-red-900",
  },
};

export const visible = {
  key: "visible",
  icon: tableIcons.visible,
  handler: () => {},
  colors: {
    light: "bg-primary",
    dark: "hover:bg-orange-900",
  },
};

export const edit = {
  key: "edit",
  icon: tableIcons.edit,
  handler: () => {},
  colors: {
    light: "bg-primary",
    dark: "hover:bg-orange-900",
  },
};

export const deleteIcon = {
  key: "delete",
  icon: tableIcons.delete,
  handler: () => {},
  colors: {
    light: "bg-red-700",
    dark: "hover:bg-red-900",
  },
};

export const manage = {
  key: "manage",
  icon: tableIcons.manage,
  handler: () => {},
  colors: {
    light: "bg-blue-600",
    dark: "hover:bg-blue-900",
  },
};

export const track = {
  key: "track",
  icon: tableIcons.track,
  handler: () => {},
  colors: {
    light: "bg-yellow-700",
    dark: "hover:bg-yellow-900",
  },
};
