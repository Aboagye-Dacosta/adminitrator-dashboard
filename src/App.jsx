import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import NavBarComponent from "./components/layout/NavBar";
import SidebarComponent from "./components/layout/SideBar";
import ChangeUsername from "./pages/configuration/ChangeUsername";
import DashBoard from "./pages/dashboard/DashBoard";

import SideBarTwo from "./components/layout/SideBarTwo";
import ChangeEmail from "./pages/configuration/ChangeEmail";
import ChangePassword from "./pages/configuration/ChangePassword";
import HomePageContent from "./pages/configuration/HomePageContent";
import SiteSettings from "./pages/configuration/SiteSettings";
import ManageCustomerList from "./pages/customers/ManageCustomerList";
import ManagePayments from "./pages/payment/ManagePayments";
import ManageServiceCategory from "./pages/service/ManageServiceCategory";
import ManageServicePackages from "./pages/service/ManageServicePackages";
import ManageServiceRequest from "./pages/service/ManageServiceRequest";
import ManageServiceProviderList from "./pages/serviceProviders/ManageServiceProviderList";
import routes from "./presentation/routes_icons/routes";

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-x-scroll min-h-full max-w-[100vw] ">
        <div className="flex flex-row w-full h-full">
          <SidebarComponent />
          <div className="flex-1 flex flex-col bg-gray-300">
            <NavBarComponent />
            <div className="flex w-full relative">
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
                        routes["Configuration"]["links"]["Change-email"][
                          "title"
                        ]
                      }
                    />
                  }
                />
                <Route
                  exact
                  path={
                    routes["Configuration"]["links"]["Site-settings"]["url"]
                  }
                  element={
                    <SiteSettings
                      title={
                        routes["Configuration"]["links"]["Site-settings"][
                          "title"
                        ]
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
                  path={
                    routes["Manage-Payment"]["links"]["Payment-History"]["url"]
                  }
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
              <SideBarTwo />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
