import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./assets/tailwind.css";

import NavBarComponent from "./components/layout/NavBar";
import SidebarComponent from "./components/layout/SideBar";
import ChangeUsername from "./pages/configuration/ChangeUsername";
import DashBoard from "./pages/dashboard/DashBoard";

import ManageAddons from "./pages/add-ons/ManageAddons";
import ChangeEmail from "./pages/configuration/ChangeEmail";
import ChangePassword from "./pages/configuration/ChangePassword";
import HomePageContent from "./pages/configuration/HomePageContent";
import SiteSettings from "./pages/configuration/SiteSettings";
import ManageCountriesList from "./pages/countries/ManageCountriesList";
import ManageCustomerList from "./pages/customers/ManageCustomerList";
import ManageMembership from "./pages/membership/ManageMembership";
import ManagePageList from "./pages/pageList/ManagePageList";
import ManageServiceCategory from "./pages/service/ManageServiceCategory";
import ManageServicePackages from "./pages/service/ManageServicePackages";
import ManageServiceRequest from "./pages/service/ManageServiceRequest";
import ManageServiceProviderList from "./pages/serviceProviders/ManageServiceProviderList";
import routes from "./presentation/routes_icons/routes";
import ManagePayments from "./pages/payment/ManagePayments";

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-x-scroll">
        <div className="flex flex-row w-rull">
          <SidebarComponent />
          <div className="flex-1 bg-gray-300">
            <NavBarComponent />
            <Routes>
              <Route
                exact
                path="/"
                element={<Navigate to="/admin/dashboard" />}
              />
              <Route
                exact
                path="/admin/dashboard"
                element={<DashBoard title={"Dashboard"} />}
              />
              <Route
                exact
                path={
                  routes["Configuration"]["links"]["Change-username"]["url"]
                }
                element={
                  <ChangeUsername
                    title={
                      routes["Configuration"]["links"]["Change-username"][
                        "title"
                      ]
                    }
                  />
                }
              />
              <Route
                exact
                path={
                  routes["Configuration"]["links"]["Change-password"]["url"]
                }
                element={
                  <ChangePassword
                    title={
                      routes["Configuration"]["links"]["Change-password"][
                        "title"
                      ]
                    }
                  />
                }
              />
              <Route
                exact
                path={routes["Configuration"]["links"]["Change-email"]["url"]}
                element={
                  <ChangeEmail
                    title={
                      routes["Configuration"]["links"]["Change-email"]["title"]
                    }
                  />
                }
              />
              <Route
                exact
                path={routes["Configuration"]["links"]["Site-settings"]["url"]}
                element={
                  <SiteSettings
                    title={
                      routes["Configuration"]["links"]["Site-settings"]["title"]
                    }
                  />
                }
              />
              <Route
                exact
                path={
                  routes["Configuration"]["links"]["Homepage-content"]["url"]
                }
                element={
                  <HomePageContent
                    title={
                      routes["Configuration"]["links"]["Homepage-content"][
                        "title"
                      ]
                    }
                  />
                }
              />

              {/* membership plan */}
              <Route
                exact
                path={
                  routes["Membership-Plan"]["links"]["Membership-plan-list"][
                    "url"
                  ]
                }
                element={
                  <ManageMembership
                    title={routes["Membership-Plan"]["title"]}
                  />
                }
              />
              {/* service request */}
              <Route
                exact
                path={
                  routes["Manage-Service-Request"]["links"][
                    "Service Request List"
                  ]["url"]
                }
                element={
                  <ManageServiceRequest
                    title={routes["Manage-Service-Request"]["title"]}
                  />
                }
              />
              <Route
                exact
                path={
                  routes["Service-Categories"]["links"][
                    "Service Category List"
                  ]["url"]
                }
                element={
                  <ManageServiceCategory
                    title={routes["Service-Categories"]["title"]}
                  />
                }
              />
              <Route
                exact
                path={
                  routes["Manage-Service-Packages"]["links"][
                    "Service-Package-List"
                  ]["url"]
                }
                element={
                  <ManageServicePackages
                    title={
                      routes["Manage-Service-Packages"]["links"][
                        "Service-Package-List"
                      ]["title"]
                    }
                  />
                }
              />
              <Route
                exact
                path={
                  routes["Manage-Adds-ons"]["links"]["Adds-ons List"]["url"]
                }
                element={
                  <ManageAddons title={routes["Manage-Adds-ons"]["title"]} />
                }
              />
              <Route
                exact
                path={
                  routes["Manage-Countries"]["links"]["Country List"]["url"]
                }
                element={
                  <ManageCountriesList
                    title={routes["Manage-Countries"]["title"]}
                  />
                }
              />
              <Route
                exact
                path={routes["Manage-Pages"]["links"]["Pages List"]["url"]}
                element={
                  <ManagePageList title={routes["Manage-Pages"]["title"]} />
                }
              />
              <Route
                exact
                path={
                  routes["Manage-Customers"]["links"]["Customer-list"]["url"]
                }
                element={
                  <ManageCustomerList
                    title={
                      routes["Manage-Customers"]["links"]["Customer-list"][
                        "title"
                      ]
                    }
                  />
                }
              />
              <Route
                exact
                path={
                  routes["Manage-service-providers"]["links"][
                    "Service-Provider-List"
                  ]["url"]
                }
                element={
                  <ManageServiceProviderList
                    title={
                      routes["Manage-service-providers"]["links"][
                        "Service-Provider-List"
                      ]["title"]
                    }
                  />
                }
              />
              <Route
                exact
                path={routes["Manage-Payment"]["links"]["Payment-History"]["url"]}
                element={
                  <ManagePayments
                    title={
                      routes["Manage-Payment"]["links"]["Payment-History"][
                        "title"
                      ]
                    }
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
