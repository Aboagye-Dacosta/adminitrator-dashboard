import SearchBar from "../../components/general/SearchBar";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageCard";
import Table from "../../components/Table/Table";
import { statusObj } from "../../service/features/customerSlice";
import {
  servicePackageTableAction,
  servicePackageTableHeaders,
} from "../../presentation/services/servicePackageTableModel";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllServices, readAllServices } from "../../service/features/serviceSlice";

// eslint-disable-next-line react/prop-types
function ManageServicePackages({ title }) {
  const dispatch = useDispatch();
  const servicesList = useSelector(getAllServices);
  const status = useSelector((state) => state.service.status);

  useEffect(() => {
    if (status === statusObj.idle) {
      dispatch(readAllServices());
    }
  }, [dispatch, status]);

  return (
    <PageLayout header={title}>
      <Container>
        <SearchBar
          handleChange={() => {}}
          handleSubmit={() => {}}
          placeholder={""}
        />
        <Table
          columnHeaders={servicePackageTableHeaders}
          data={servicesList}
          status={status}
          handleChecked={() => {}}
          title="Service Packages List"
          tableActions={servicePackageTableAction}
        />
      </Container>
    </PageLayout>
  );
}

export default ManageServicePackages;
