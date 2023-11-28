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
import { Link } from "react-router-dom";

function SideBarTile({ Icon, title, links = [], id, handleOpen, open }) {
  return (
    <Accordion open={open === id} icon={<FaAngleDoubleDown />}>
      <ListItem
        className="p-0 hover:bg-primary selected:bg-primary focus:bg-primary active:bg-primary text-white my-3"
        selected={open === id}
      >
        <AccordionHeader
          onClick={() => handleOpen(id)}
          className="border-b-0 p-3"
        >
          <ListItemPrefix>
            <Icon className="h-7 w-7 mx-2 text-gray-400" />
          </ListItemPrefix>
          <Typography
            color="blue-gray"
            className="mr-auto font-normal text-white text-[1.3rem]"
          >
            {title}
          </Typography>
        </AccordionHeader>
      </ListItem>
      <AccordionBody className="py-1">
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
    </Accordion>
  );
}

export default SideBarTile;
