import Table from "../../components/Table/Table";
import SearchBar from "../../components/general/SearchBar";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageCard";
import { addOnsTableAction, addOnsTableHeaders } from "../../presentation/addOnsTableModel";

import { data } from "../../presentation/dummyTableData";

// eslint-disable-next-line react/prop-types
function ManageAddons({ title }) {
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
          data={data}
          columnHeaders={addOnsTableHeaders}
          handleChecked={() => {}}
          tableActions={addOnsTableAction}
        />
      </Container>
    </PageLayout>
  );
}

export default ManageAddons;
