/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { useState } from "react";

function SearchBar({
  placeholder,
  handleChange = () => {},
  handleSubmit,
  searchBy,
  handleClear = () => {},
}) {
  const [value, setValue] = useState("");
  const clearSearch = () => {
    setValue("");
    handleClear();
  };
  return (
    <div className="self-end flex flex-col">
      <span className="text-[1.2rem] mb-4">{searchBy}</span>
      <div className="flex flex-row  items-center justify-start">
        <div className="border border-black w-full  md:w-[20rem]  py-2 px-1 mb-5 md:mb-0">
          <input
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={(e) => {
              handleChange(e);
              setValue(e.target.value);
            }}
            className="outline-none focus:outline-none w-full text-[1.2rem] text-black"
          />
        </div>
        <Button
          className="bg-primary md:mx-5 text-[1.2rem] w-full mb-2 md:mb-0 md:w-[10rem]"
          onClick={() => handleSubmit(value)}
        >
          Search
        </Button>
        <Button
          className="bg-slate text-[1.2rem] text-black w-[12rem]"
          onClick={clearSearch}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}

export default SearchBar;
