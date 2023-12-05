import { Button } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
function FormActionButtons({ handleCancel }) {
  return (
    <div className="lg:grid lg:grid-cols-[2fr_6fr]">
      <div></div>
      <div className="">
        <Button
          className="bg-primary text-[1.2rem] text-white mr-3 px-3 min-w-[10rem]"
          type="submit"
        >
          Save
        </Button>
        <Button
          className="bg-white text-[1.2rem] text-black px-3 min-w-[10rem]"
          onClick={handleCancel}
        >
          Cancle
        </Button>
      </div>
    </div>
  );
}

export default FormActionButtons;
