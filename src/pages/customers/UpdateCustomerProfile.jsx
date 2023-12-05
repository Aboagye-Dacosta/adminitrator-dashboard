import { useEffect } from "react";
import FormActionButtons from "../../components/form/FormActionButtons";
import FormImageInput from "../../components/form/FormImageInput";
import FormTextInput from "../../components/form/FormTextInput";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageCard";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCustomerById } from "../../service/features/customerSlice";

// eslint-disable-next-line react/prop-types
function UpdateCustomerProfile({ title }) {
  const id = useParams();
  const dispatch = useDispatch();
  const customer = useSelector(selectCustomerById(id));

  useEffect(() => {});
  return (
    <PageLayout header={title}>
      <Container>
        <form>
          <FormTextInput label="Name" name="name" value={customer.name} />
          <FormTextInput label="Email" name="email" value={customer.email} />
          <FormTextInput
            label="Contact Number"
            name="contact"
            value={customer.contact}
          />
          <FormTextInput
            label="Address"
            name="address"
            value={customer.address}
          />
          <FormImageInput
            label="Profile picture"
            name="profilePicture"
            helperText="Supported File Types: jpg, jpeg, png (Max. 2MB)."
            file={customer.profilePicture}
          />

          <FormActionButtons handleCancel={() => {}} />
        </form>
      </Container>
    </PageLayout>
  );
}

export default UpdateCustomerProfile;
