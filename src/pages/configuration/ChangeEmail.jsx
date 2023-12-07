import { Button } from "@material-tailwind/react";
import FormTextInput from "../../components/form/FormTextInput";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageLayout";

// eslint-disable-next-line react/prop-types
function ChangeEmail({ title }) {
  const handleCancel = () => {
    window.history.back();
  };
  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
  };

  return (
    <PageLayout header={title}>
      <Container>
        <form onSubmit={handleSave}>
          <div className="w-full">
            <FormTextInput
              label={"Current Email"}
              name="currentEmail"
              type="email"
            />
            <FormTextInput label={"New Email"} name="newEmail" type="email" />
            <FormTextInput
              label={"Confirm Email"}
              name="confirmEmail"
              type="email"
            />
          </div>
          <div className="lg:ml-60">
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

export default ChangeEmail;
