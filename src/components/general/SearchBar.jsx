import { Button } from "@material-tailwind/react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function SearchBar({ placeholder, handleChange = () => {}, handleSubmit }) {
  const [value, setValue] = useState("");
  const clearSearch = () => {
    setValue("");
  };
  return (
    <div className="flex flex-col w-full">
      <span>Search by Name</span>
      <div className="flex w-full flex-col md:flex-row  items-center justify-start">
        <div className="border border-black w-full  md:w-[20rem]  py-2 px-1 mb-5 md:mb-0">
          <input
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={(e) => {
              handleChange(e);
              console.log(e.target.value);
              setValue(e.target.value);
            }}
            className="border-none outline-none focus:outline-none w-full !text-[1.2rem] text-black"
          />
        </div>
        <Button
          className="bg-primary md:mx-5 text-[1.2rem] w-full mb-2 md:mb-0 md:w-[10rem]"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          className="bg-white text-[1.2rem] text-black w-full md:w-[15rem]"
          onClick={clearSearch}
        >
          Clear Search
        </Button>
      </div>
    </div>
  );
}

export default SearchBar;
