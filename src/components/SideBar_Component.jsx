import { Card, List, ListItem, Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import routes from "../presentation/routes.js";
import SideBarTile from "./layout/SideBarTile_Component.jsx";

function SidebarCompnent() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="min-h-[100vh-5rem] w-full max-w-[25rem] p-4 shadow-xl shadow-blue-gray-900/5 border-r-0 rounded-none bg-black text-white">
      <List className="">
        <ListItem
          selected={open === 0}
          onClick={() => handleOpen(0)}
          className="active:bg-primay"
        >
          <Link to="/">
            <Typography className="text-[1.5rem] font-bold text-white">
              Dashboard
            </Typography>
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
    </Card>
  );
}

export default SidebarCompnent;
