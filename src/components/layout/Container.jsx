import { Alert, Card } from "@material-tailwind/react";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  getAlertData,
  getAlertStatus,
  toggleAlert,
  toggleSideTwo,
} from "../../service/features/navigation_slice";

// eslint-disable-next-line react/prop-types
function Container({ children, sideBarVisible = false }) {
  const dispatch = useDispatch();
  const { icon, bgColor, message, iconColor } = useSelector(getAlertData);
  const open = useSelector(getAlertStatus);
  const Icon = icon;
  return (
    <Card className="relative flex-1 border-t-2 overflow-x-scroll rounded-none border-primary px-5 py-10  min-h-[50vh]  ">
      {sideBarVisible && (
        <div
          className="h-20 w-20 hover:bg-slate text-center absolute top-5 right-5 "
          onClick={() => {
            dispatch(toggleSideTwo());
          }}
        >
          <BsLayoutSidebarInsetReverse className="text-[2rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      )}

      <div className="w-full mt-5 mb-10">
        <Alert
          open={open}
          onClose={()=>dispatch(toggleAlert())}
          icon={<Icon className={`${iconColor} text-[1.5rem]`} />}
          className={`py-4 px-3 rounded-none ${bgColor} text-[1.5rem]`}
        >
          {message}
        </Alert>
      </div>
      {children}
    </Card>
  );
}

export default Container;
