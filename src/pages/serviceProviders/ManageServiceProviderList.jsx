import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBar from "../../components/general/SearchBar";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageCard";
import Table from "../../components/table/Table";

import {
  serviceProviderTableAction,
  serviceProviderTableHeaders,
} from "../../presentation/serviceProviders/serviceProviderTableModel";
import { statusObj } from "../../service/features/customerSlice";
import {
  getAllSupplier,
  readAllSuppliers,
} from "../../service/features/serviceProviderSlice";

// eslint-disable-next-line react/prop-types
function ManageServiceProviderList({ title }) {
  const dispatch = useDispatch();
  const supplierList = useSelector(getAllSupplier);
  const status = useSelector((state) => state.serviceProvider.status);

  useEffect(() => {
    if (status === statusObj.idle) {
      dispatch(readAllSuppliers());
    }
  }, [dispatch, status]);

  return (
    <PageLayout header={title}>
      <Container>
        <SearchBar placeholder="Search by" />

        <Table
          title="Plans List"
          checkAble={false}
          data={supplierList}
          columnHeaders={serviceProviderTableHeaders}
          handleChecked={() => {}}
          status={status}
          tableActions={serviceProviderTableAction}
        />
      </Container>
    </PageLayout>
  );
}

export default ManageServiceProviderList;
