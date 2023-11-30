import { Navbar } from "@material-tailwind/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  selectNavState,
  setNavigationState,
} from "../../service/features/navigation_slice";

function NavBarComponent() {
  const dispatch = useDispatch();
  const openNav = useSelector(selectNavState);
  // const [open, setOpenNav] = useState(openNav);

  const handleNavigation = () => {
    // setOpenNav((state) => !state);
    dispatch(setNavigationState(!openNav));
  };
  return (
    <>
      <Navbar className="flex-row shadow-none pl-0 pr-5 py-0 flex aligns-middle w-full items-center justify-between !bg-white rounded-none h-[5rem] ">
        <div
          className="h-[5rem] flex items-center justify-center transition duration-200 bg-transparent hover:bg-primry px-5 hover:bg-primary"
          onClick={handleNavigation}
        >
          <GiHamburgerMenu className="text-black text-[2rem]" />
        </div>

        <div className="text-[1.4rem] flex items-center text-primary">
          <Link to="/" className=" mr-4">
            Callevasolutions
          </Link>
          <Link to="/" className=" flex items-center">
            <IoIosLogOut className="mr-2" /> logout
          </Link>
        </div>
      </Navbar>
    </>
  );
}

export default NavBarComponent;
