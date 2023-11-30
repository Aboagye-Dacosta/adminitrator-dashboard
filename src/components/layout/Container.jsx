import { Card } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
function Container({ children }) {
  return (
    <Card className="border-t-2 rounded-none border-primary px-5 py-10 w-full h-max ">
      {children}
    </Card>
  );
}

export default Container;
