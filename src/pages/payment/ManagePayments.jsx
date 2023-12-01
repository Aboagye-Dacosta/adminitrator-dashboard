import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Table from "../../components/Table/Table";
import SearchBar from "../../components/general/SearchBar";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageCard";
import { managePaymentListHeaders } from "../../presentation/payments/managePaymentModel";
import { statusObj } from "../../service/features/customerSlice";
import {
  getAllPayments,
  readAllPayments,
} from "../../service/features/paymentSlice";

// eslint-disable-next-line react/prop-types
function ManagePayments({ title }) {
  const dispatch = useDispatch();
  const paymentList = useSelector(getAllPayments);
  const status = useSelector((state) => state.payment.status);

  useEffect(() => {
    if (status === statusObj.idle) {
      dispatch(readAllPayments());
    }
  }, [dispatch, status]);
  return (
    <PageLayout header={title}>
      <Container>
        <SearchBar
          handleSubmit={() => {}}
          handleChange={() => {}}
          placeholder={""}
        />

        <Table
          title="Plans List"
          data={paymentList}
          columnHeaders={managePaymentListHeaders}
          handleChecked={() => {}}
          status={status}
          tableActions={[]}
        />
      </Container>
    </PageLayout>
  );
}

export default ManagePayments;
