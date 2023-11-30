/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
function FormTextInput({
  label,
  placeholder,
  name,
  handleChange,
  required = true,
  type = "text",
  helperText,
  value,
}) {
  return (
    <div className={`flex flex-col  ${label && "lg:grid lg:grid-cols-[2fr_6fr] my-10"} w-full items-start lg:items-center  justify-start`}>
      <label className="lg:-mb-5 whitespace-nowrap mr-10 font-semibold text-[1.5rem] lg:text-right">
        {label}
        {required && <sup className="text-primary text-[1rem]">*</sup>}
      </label>
      <div className="w-full">
        <div className="border w-full border-black p-2">
          <input
            placeholder={placeholder}
            className={`border-none w-full !text-[1.2rem] bg-transparent outline-none focus:outline-none ${
              helperText && "mb-2"
            }`}
            onChange={handleChange}
            value={value}
            required={required}
            type={type}
            name={name}
          />
        </div>
        <span>{helperText}</span>
      </div>
    </div>
  );
}

export default FormTextInput;
