import SearchBar from "../../components/general/SearchBar";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageCard";
import Table from "../../components/Table/Table";
import {
  serviceRequestTableActions,
  serviceRequestTableHeaders,
} from "../../presentation/services/serviceRequestTableModel";

import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusObj } from "../../service/features/customerSlice";
import { filters } from "../../service/features/serviceProviderAndCustomerSlice";
import {
  getFilterValue,
  getSelectedEmail,
} from "../../service/features/serviceProviderAndCustomerSlice";
import { getAllServiceRequests, readAllServiceRequests, readServiceRequestsByCustomerEmail, readServiceRequestsByServiceProviderEmail } from "../../service/features/serviceRequestSlice";

// eslint-disable-next-line react/prop-types
function ManageServiceRequest({ title }) {
  const dispatch = useDispatch();
  const serviceRequests = useSelector(getAllServiceRequests);
  const status = useSelector((state) => state.payment.status);
  const selectedEmail = useSelector(getSelectedEmail);
  const selectedFilter = useSelector(getFilterValue);

  const loadData = useCallback(() => {
    if (status == statusObj.idle) {
      if (selectedEmail && selectedFilter == filters.customers) {
        dispatch(readServiceRequestsByCustomerEmail(selectedEmail));
      } else if (selectedEmail && selectedFilter == filters.suppliers) {
        dispatch(readServiceRequestsByServiceProviderEmail(selectedEmail));
      } else {
        dispatch(readAllServiceRequests());
      }
    }
  }, [dispatch, selectedEmail, selectedFilter, status]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <PageLayout header={title}>
      <Container sideBarVisible={true}>
        <SearchBar
          handleChange={() => {}}
          handleSubmit={() => {}}
          placeholder={""}
        />
        <Table
          columnHeaders={serviceRequestTableHeaders}
          data={serviceRequests}
          handleChecked={() => {}}
          title="Service Requests List"
          status={status}
          tableActions={serviceRequestTableActions}
        />
      </Container>
    </PageLayout>
  );
}

export default ManageServiceRequest;
