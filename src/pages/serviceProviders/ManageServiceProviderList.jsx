import { Button } from "@material-tailwind/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import SearchBar from "../../components/general/SearchBar";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageLayout";
import Table from "../../components/table/Table";

import routes from "../../presentation/routes_icons/routes";
import {
  serviceProviderTableAction,
  serviceProviderTableHeaders,
} from "../../presentation/serviceProviders/serviceProviderTableModel";
import { statusObj } from "../../service/features/customerSlice";
import {
  getAllSupplier,
  readAllSuppliers,
  searchServiceProvider,
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
    <PageLayout header={title} id="serviceProvider">
      <Container>
        <div className="flex justify-between items-baseline">
          <SearchBar
            placeholder="Search by"
            searchBy="Search by Username or Email Address"
            handleChange={() => {}}
            handleSubmit={(value) => dispatch(searchServiceProvider(value))}
            handleClear={() => dispatch(readAllSuppliers())}
          />
          <Link
            to={
              routes["Manage-service-providers"]["links"][
                "Create-Service-Provider"
              ]["url"]
            }
          >
            <Button className="bg-slate px-2 text-black text-[1.2rem] py-3 h-max">
              Add Service Provider
            </Button>
          </Link>
        </div>

        <Table
          title="Service Provider List"
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
