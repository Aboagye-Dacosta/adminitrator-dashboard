/* eslint-disable react/prop-types */
import
  {
    Breadcrumbs,
    Card,
    CardBody,
    CardHeader,
  } from "@material-tailwind/react";

import { Link, useLocation } from "react-router-dom";

function PageLayout({ children, header }) {
  const path = useLocation().pathname;
  const endPointList = path
    .substring(1)
    .replace("admin", "Dashboard")
    .split("/")
    .map((point) => point.split("-").join(" "));

  return (
    <Card className="w-full flex flex-col  my-7 !bg-transparent border-none shadow-none">
      <CardHeader className="text-[2rem] !shadow-none  !bg-transparent font-bold text-gray-700 py-5  px-5 flex lg:flex-row flex-col justify-between items-center">
        {header}
        <Breadcrumbs separator={">"} className="text-[1.2rem] mt-5 lg:mt-0">
          {endPointList.map((point, i) => (
            <Link to="/" key={i} className="text-[1rem]">
              {point}
            </Link>
          ))}
        </Breadcrumbs>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
}

export default PageLayout;
