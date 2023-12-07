import { Button } from "@material-tailwind/react";
import FormTextInput from "../../components/form/FormTextInput";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageLayout";

// eslint-disable-next-line react/prop-types
function ChangeUsername({ title }) {
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
        <form className="w-full" onSubmit={handleSave}>
          <div>
            <FormTextInput
              label={"Current Username"}
              required={false}
              name="currentUsername"
            />
            <FormTextInput label={"New Username"} name="newUsername" />
            <FormTextInput label={"Confirm Username"} name="confirmUsername" />
          </div>
          <div className="ml-60">
            <Button
              className="bg-primary text-[1.2rem] text-white mr-3"
              type="submit"
            >
              Submit
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

export default ChangeUsername;
