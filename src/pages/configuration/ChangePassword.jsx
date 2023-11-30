import { Button } from "@material-tailwind/react";
import FormTextInput from "../../components/form/FormTextInput";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageCard";

// eslint-disable-next-line react/prop-types
function ChangePassword({ title }) {
  const handleCancel = () => {};
  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
  };

  return (
    <PageLayout header={title}>
      <Container>
        <form onSubmit={handleSave}>
          <div>
            <FormTextInput label={"Current Password"} name="currentPassword" />
            <FormTextInput label={"New Password"} name="newPassword" />
            <FormTextInput label={"Confirm Password"} name="confirmPassword" />
          </div>
          <div className="ml-60">
            <Button
              className="bg-primary text-[1.2rem] text-white mr-3"
              type="submit"
            >
              Save
            </Button>
            <Button
              className="bg-white text-[1.2rem] text-black"
              onClick={handleCancel}
            >
              Cancle
            </Button>
          </div>
        </form>
      </Container>
    </PageLayout>
  );
}

export default ChangePassword;
