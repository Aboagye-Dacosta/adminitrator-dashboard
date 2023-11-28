import { Navbar } from "@material-tailwind/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function NavBarComponent() {
  return (
    <>
      <Navbar className="flex-row shadow-none py-0 flex aligns-middle  h-[4rem] w-full items-center justify-between ">
        <div className="w-[25rem] h-[5rem] flex flex-row items-center justify-center ">
          <h1 className="flex-1 text-[2rem] text-primary font-bold text-center">Calleva</h1>
          <div className="h-[4rem] flex items-center justify-center transition duration-200 bg-transparent hover:bg-primry px-3 hover:bg-primary">
            <GiHamburgerMenu className="text-black text-[2rem]" />
          </div>
        </div>
        <div>
          <Link to="/" className="text-primary mr-4">
            Callevasolutions
          </Link>
          <Link to="/" className="text-primary">
            logout
          </Link>
        </div>
      </Navbar>
    </>
  );
}

export default NavBarComponent;
