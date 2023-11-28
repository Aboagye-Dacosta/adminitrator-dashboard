import { Button } from "@material-tailwind/react";
import Container from "../../components/Container";
import FormInputItem from "../../components/FormInputItem_Component";
import PageLayout from "../../layouts/PageLayout";

// eslint-disable-next-line react/prop-types
function ChangeUsername({ title }) {
  const handleCancel = () => {};
  const handleSave = () => {};

  return (
    <PageLayout header={title}>
      <Container>
        <div>
          <FormInputItem label={"Current Username"} required={false} />
          <FormInputItem label={"New Username"} />
          <FormInputItem label={"Confirm Username"} />
        </div>
        <div className="ml-60">
          <Button
            className="bg-primary text-[1.2rem] text-white mr-3"
            onClick={handleSave}
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
      </Container>
    </PageLayout>
  );
}

export default ChangeUsername;
