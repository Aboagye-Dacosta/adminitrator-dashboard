/* eslint-disable react/prop-types */
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function DashboardTile({
  title = "title",
  Icon = FaRegArrowAltCircleRight,
  path = "/",
}) {
  return (
    <Card className="relative grid grid-row-[4fr_1fr] w-[22rem] h-[15rem] even:bg-orange-800 odd:bg-blue-800 my-5 pb-0 group">
      <Icon className="text-[10rem] text-inherit absolute right-2 top-4 z-10 group-hover:scale-110 transition-transform duration-200 opacity-70" />
      <CardBody className="z-20 col-span-5">
        <div className=" w-full">
          <span className="text-[4rem] text-white">22</span>
          <h2 className="text-white font-bold text-[1.2rem]">{title}</h2>
        </div>
      </CardBody>
      <Link
        className="w-[22rem] bg-gray-800 hover:bg-gray-900  flex items-center justify-center text-white col-span-1"
        to={path}
      >
        <Typography className="mx-3 group-hover/link:scale-105 transition-transform duration-100">More info</Typography>
        <FaRegArrowAltCircleRight className="text-primary"/>
      </Link>
    </Card>
  );
}

export default DashboardTile;
