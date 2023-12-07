import FormActionButtons from "../../components/form/FormActionButtons";
import FormImageInput from "../../components/form/FormImageInput";
import FormTextInput from "../../components/form/FormTextInput";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageLayout";

// eslint-disable-next-line react/prop-types
function ManageAddCustomer({ title }) {
  return (
    <PageLayout header={title}>
      <Container>
        <form>
          <FormTextInput label="Name" name="name" />
          <FormTextInput label="Email" name="email" />
          <FormTextInput label="Contact Number" name="contact" />
          <FormTextInput label="Address" name="address" />
          <FormImageInput
            label="Profile picture"
            name="profilePicture"
            helperText="Supported File Types: jpg, jpeg, png (Max. 2MB)."
          />

          <FormActionButtons handleCancel={() => {}} />
        </form>
      </Container>
    </PageLayout>
  );
}

export default ManageAddCustomer;
