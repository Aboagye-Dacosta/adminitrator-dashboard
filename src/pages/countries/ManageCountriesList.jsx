import Table from "../../components/Table/Table";
import SearchBar from "../../components/general/SearchBar";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageCard";
import {
  countriesListTableHeaders,
  countriesListTableAction,
} from "../../presentation/countriesListTableModel";

import { data } from "../../presentation/dummyTableData";

// eslint-disable-next-line react/prop-types
function ManageCountriesList({ title }) {
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
          columnHeaders={countriesListTableHeaders}
          handleChecked={() => {}}
          tableActions={countriesListTableAction}
        />
      </Container>
    </PageLayout>
  );
}

export default ManageCountriesList;
