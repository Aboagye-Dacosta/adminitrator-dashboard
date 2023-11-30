import { Button } from "@material-tailwind/react";
import { FaPlus } from "react-icons/fa";
import Table from "../../components/Table/Table";
import SearchBar from "../../components/general/SearchBar";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageCard";
import { data } from "../../presentation/dummyTableData";
import {
  membershipTableAction,
  membershipTableHeaders,
} from "../../presentation/membershipTableModel";

// eslint-disable-next-line react/prop-types
function ManageMembership({ title }) {
  return (
    <PageLayout header={title}>
      <Container>
        <div className="flex flex-col md:flex-row items-baseline w-full md:justify-between">
          <SearchBar placeholder="Search by" />

          <Button className="flex items-center justify-center bg-slate text-[1.2rem] text-black self-end">
            <FaPlus />
            Add Customer
          </Button>
        </div>

        <Table
          title="Plans List"
          data={data}
          columnHeaders={membershipTableHeaders}
          handleChecked={() => {}}
          tableActions={membershipTableAction}
        />
      </Container>
    </PageLayout>
  );
}

export default ManageMembership;
