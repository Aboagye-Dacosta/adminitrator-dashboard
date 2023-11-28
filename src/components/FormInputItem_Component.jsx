/* eslint-disable react/prop-types */
import { Input, Typography } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
function FormInputItem({ label, placeholder, changeHandler, required = true }) {
  return (
    <div className="flex flex-col  lg:grid lg:grid-cols-[1fr_5fr] my-10 w-full items-start lg:items-center  justify-start">
      <Typography
        color="blue-gray"
        className="lg:-mb-5 whitespace-nowrap mr-5 font-semibold text-[1.5rem] lg:text-right"
      >
        {label}
        {/* {required && <sup className="text-primary text-[1rem]">*</sup>} */}
      </Typography>
      <Input
        placeholder={placeholder}
        className=" !border-t-blue-gray-200 focus:border-blue-200 py-7 rounded-none !text-[1.2rem]"
      
        onChange={changeHandler}
        variant="outline"
        required={required}
        labelProps={{
          className: "before:content-none after:content-none ",
          
        }}
      />
    </div>
  );
}

export default FormInputItem;
