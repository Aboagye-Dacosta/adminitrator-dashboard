import FormActionButtons from "../../components/form/FormActionButtons";
import FormImageInput from "../../components/form/FormImageInput";
import FormTextAreaInput from "../../components/form/FormTextAreaInput";
import FormTextInput from "../../components/form/FormTextInput";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageLayout";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectCustomerById,
  updateCustomerById,
} from "../../service/features/customerSlice";

// eslint-disable-next-line react/prop-types
function UpdateCustomerProfile({ title }) {
  const id = useParams().id;
  const dispatch = useDispatch();
  const customer = useSelector(selectCustomerById(id))[0];

  console.log("update data", customer);

  console.log("update customer", id);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    dispatch(updateCustomerById(id, data));
  };



  return (
    <PageLayout header={title} id="customer">
      <Container>
        <form onSubmit={handleSubmit} method="Post">
          <FormTextInput label="Name" name="name" value={customer.name} />
          <FormTextInput
            label="Email"
            name="email"
            value={customer.email}
            type="email"
          />
          <FormTextInput
            label="Contact Number"
            name="contact"
            value={customer.contact}
          />
          <FormTextAreaInput
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
