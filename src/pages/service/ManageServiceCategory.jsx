import Table from "../../components/Table/Table";
import SearchBar from "../../components/general/SearchBar";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageCard";
import { serviceCategoryTableActions, serviceCategoryTableHeaders } from "../../presentation/serviceCategoryTableModel";

// eslint-disable-next-line react/prop-types
function ManageServiceCategory({ title }) {
  return (
    <PageLayout header={title}>
      <Container>
        <SearchBar
          handleSubmit={() => {}}
          placeholder=""
          handleChange={() => {}}
        />
        <Table
          title="Plans List"
          data={[]}
          columnHeaders={serviceCategoryTableHeaders}
          handleChecked={() => {}}
          tableActions={serviceCategoryTableActions}
        />
      </Container>
    </PageLayout>
  );
}

export default ManageServiceCategory;
