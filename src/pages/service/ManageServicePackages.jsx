import SearchBar from "../../components/general/SearchBar";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageCard";
import Table from "../../components/Table/Table";
import { data } from "../../presentation/dummyTableData";
import { servicePackageTableAction, servicePackageTableHeaders } from "../../presentation/servicePackageTableModel";

// eslint-disable-next-line react/prop-types
function ManageServicePackages({ title }) {
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
          data={data}
          handleChecked={() => {}}
          title="Service Packages List"
          tableActions={servicePackageTableAction}
        />
      </Container>
    </PageLayout>
  );
}

export default ManageServicePackages;
