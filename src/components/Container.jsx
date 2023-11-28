import { Card } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
function Container({ children }) {
  return (
    <Card className="border-t-2 border-primary px-5 py-10 w-full h-max bg-gray-300">
      {children}
    </Card>
  );
}

export default Container;
