import { List, ListItem, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { IoIosColorPalette } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import routes from "../../presentation/routes.js";
import { selectNavState } from "../../service/features/navigation_slice.js";
import SideBarTile from "./SideBarTile.jsx";

import logo from "../../assets/logo/logo.png";

function SidebarCompnent() {
  const openNav = useSelector(selectNavState);
  const [open, setOpen] = useState(0);
  console.log(openNav);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div
      className={`min-h-[100vh-5rem] pt-0 transition-[width] duration-500 ${
        openNav == true
          ? "!w-[25rem] md:overflow-hidden"
          : "w-0 overflow-hidden lg:w-[5rem] lg:overflow-visible"
      }  shadow-xl group/sideNav  shadow-blue-gray-900/5 border-r-0 rounded-none bg-black text-white z-50`}
    >
      <h1 className="md:flex items-center justify-center text-[2rem] text-primary font-bold text-center bg-white hidden md:h-[5rem]">
        {openNav && <img src={logo } className="w-32"/>}
      </h1>

      <List className={`${!openNav && "w-[5rem]"}`}>
        <ListItem
          selected={open === 0}
          onClick={() => handleOpen(0)}
          className={`hover:bg-orange-700 rounded-none active:bg-primary ${
            !openNav && "w-[4rem]"
          }`}
        >
          <Link
            to="/"
            className="w-full h-full flex items-center justify-start flex-row"
          >
            <IoIosColorPalette
              className={`h-7 w-7 text-gray-400 ${openNav && "mr-5"}`}
            />
            {openNav && (
              <Typography className="text-[1.5rem] font-bold text-white">
                Dashboard
              </Typography>
            )}
          </Link>
        </ListItem>

        {Object.values(routes).map((route) => {
          return (
            <SideBarTile
              key={route.id}
              Icon={route.icon}
              title={route.title}
              id={route.id}
              open={open}
              handleOpen={() => handleOpen(route.id)}
              links={Object.values(route.links)}
            />
          );
        })}
      </List>
    </div>
  );
}

export default SidebarCompnent;
