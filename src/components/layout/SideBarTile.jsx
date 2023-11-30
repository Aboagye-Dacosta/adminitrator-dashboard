/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

import { FaAngleDoubleDown } from "react-icons/fa";
import { IoRadioButtonOffSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectNavState } from "../../service/features/navigation_slice";

function SideBarTile({ Icon, title, links = [], id, handleOpen, open }) {
  const openNav = useSelector(selectNavState);
  return (
    <Accordion
      open={open === id}
      icon={openNav && <FaAngleDoubleDown />}
      className={`my-3 relative group/accordion ${
        !openNav ? "w-[4rem]" : "w-full"
      }`}
    >
      <ListItem
        className={`${
          !openNav ? "w-[4rem]" : "w-full"
        } p-0 hover:bg-primary selected:bg-primary focus:bg-primary active:bg-primary text-white overflow-hidden group-hover/navSidebar:overflow-visible  rounded-none`}
        selected={open === id}
      >
        <AccordionHeader
          onClick={() => handleOpen(id)}
          className="border-b-0 p-3 w-full overflow-hidden"
        >
          <ListItemPrefix>
            <Icon className="h-7 w-7 mx-2 text-gray-400" />
          </ListItemPrefix>
          {openNav && (
            <Typography
              color="blue-gray"
              className="mr-auto font-normal text-white text-[1.3rem]"
            >
              {title}
            </Typography>
          )}
        </AccordionHeader>
      </ListItem>
      {openNav && (
        <AccordionBody className="py-1 bg-blue-gray-900 ml-4">
          <List className="p-0 ">
            {links.map(({ url, title }, i) => (
              <Link key={i} to={url}>
                <ListItem className="text-gray-500 bg-none hover:bg-black hover:text-gray-600 focus:bg-black focus:text-gray-600 text-[1.2rem]  ">
                  <ListItemPrefix>
                    <IoRadioButtonOffSharp />
                  </ListItemPrefix>
                  {title}
                </ListItem>
              </Link>
            ))}
          </List>
        </AccordionBody>
      )}
      {!openNav && (
        <div className="absolute hidden group-hover/accordion:flex left-[4.1rem] top-0 group-hover/accordion:z-100  flex-col">
          <div className="bg-gray-800 text-[1.5rem] text-white py-5">
            {title}
          </div>
          <List className=" bg-gray-900">
            {links.map(({ url, title }, i) => (
              <Link key={i} to={url}>
                <ListItem className="text-gray-500 bg-none hover:bg-black hover:text-gray-600 focus:bg-black focus:text-gray-600 text-[1.2rem]  ">
                  <ListItemPrefix>
                    <IoRadioButtonOffSharp />
                  </ListItemPrefix>
                  {title}
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      )}
    </Accordion>
  );
}

export default SideBarTile;
