import SearchBar from "../../components/general/SearchBar";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageCard";
import Table from "../../components/Table/Table";
import { serviceRequestTableActions, serviceRequestTableHeaders } from "../../presentation/serviceRequestTableModel";

// eslint-disable-next-line react/prop-types
function ManageServiceRequest({ title }) {
  return (
    <PageLayout header={title}>
      <Container>
        <SearchBar
          handleChange={() => {}}
          handleSubmit={() => {}}
          placeholder={""}
        />
        <Table
          columnHeaders={serviceRequestTableHeaders}
          data={[]}
          handleChecked={() => {}}
          title="Service Requests List
"
          tableActions={serviceRequestTableActions}
        />
      </Container>
    </PageLayout>
  );
}

export default ManageServiceRequest;
