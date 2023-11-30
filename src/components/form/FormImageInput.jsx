/* eslint-disable react/prop-types */
import { useState } from "react";

function FormImageInput({
  label,
  placeholder = "",
  name,
  handleChange = () => {},
  file,
  helperText,
}) {
  const [image, setImage] = useState("");

  const handleImageChange = (e) => {
    handleChange(e);

    const selectedImage = e.target.files[0];

    console.log(selectedImage);
    setImage(URL.createObjectURL(selectedImage));
  };

  return (
    <div className="w-full">
      <div className="flex flex-col lg:grid lg:grid-cols-[2fr_6fr] my-10 w-full items-start  justify-start">
        <label className=" whitespace-nowrap mr-10 font-semibold text-[1.5rem] lg:text-right">
          {label}
        </label>
        <div className="w-full">
          <div
            className={`border-black w-full border flex items-center justify-start ${
              helperText && "mb-3"
            }  p-2`}
          >
            <input
              type="file"
              onChange={handleImageChange}
              name={name}
              placeholder={placeholder}
              className="rounded-none !text-[1.2rem] w-full"
            />
          </div>
          <span className="text-[1rem]">{helperText}</span>
          {!file && image ? (
            <img
              className=" w-1/6 object-cover object-center"
              src={image}
              alt="nature image"
            />
          ) : file ? (
            <img
              className=" w-1/6 object-cover object-center"
              src={file}
              alt="nature image"
            />
          ) : file && image ? (
            <img
              className=" w-1/6 object-cover object-center"
              src={file}
              alt="nature image"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default FormImageInput;
