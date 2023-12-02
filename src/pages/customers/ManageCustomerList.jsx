import { useDispatch, useSelector } from "react-redux";
// import PuffLoader from "react-spinners/PuffLoader";

import SearchBar from "../../components/general/SearchBar";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageCard";
import Table from "../../components/table/Table";

import { useEffect } from "react";
import {
  customerListTableAction,
  customerListTableHeaders,
} from "../../presentation/customers/customerListTableModel";
import {
  getAllCustomers,
  readAllCustomers,
  searchUser,
  statusObj,
} from "../../service/features/customerSlice";

// eslint-disable-next-line react/prop-types
function ManageCustomerList({ title }) {
  const dispatch = useDispatch();
  const customerList = useSelector(getAllCustomers);
  const status = useSelector((state) => state.customer.status);
  const errorMessage = useSelector((state) => state.customer.errorMessage);

  useEffect(() => {
    if (status === statusObj.idle) {
      dispatch(readAllCustomers());
    }
  }, [dispatch, status]);

  return (
    <PageLayout header={title} id="customer">
      <Container>
        <div className="w-full flex-row flex justify-start">
          
          <SearchBar
            placeholder="Search by"
            searchBy="Search by Username or Email Address"
            handleSubmit={(value) => dispatch(searchUser(value))}
            handleClear={() => dispatch(readAllCustomers())}
          />
        </div>
        <Table
          checkAble={false}
          title="Customer List"
          status={status}
          errorMessage={errorMessage}
          data={customerList}
          columnHeaders={customerListTableHeaders}
          handleChecked={() => {}}
          tableActions={customerListTableAction}
        />
      </Container>
    </PageLayout>
  );
}

export default ManageCustomerList;
