import Table from "../../components/Table/Table";
import SearchBar from "../../components/general/SearchBar";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageCard";
import {
  countriesTableActions,
  countriesTableHeaders,
} from "../../presentation/countries/manageCountriesTabelModel";

import { data } from "../../presentation/dummy/dummyTableData";

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
          columnHeaders={countriesTableHeaders}
          handleChecked={() => {}}
          tableActions={countriesTableActions}
        />
      </Container>
    </PageLayout>
  );
}

export default ManageCountriesList;
