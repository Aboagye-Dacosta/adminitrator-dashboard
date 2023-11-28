import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/tailwind.css";

import NavBarComponent from "./components/NavBar_Component";
import SidebarComponent from "./components/SideBar_Component";
import ChangeUsername from "./pages/configuration/Change_Username";
import DashBoard from "./pages/dashboard/DashBoard";

import routes from "./presentation/routes";
import ChangePassword from "./pages/configuration/ChangePassword";
import ChangeEmail from "./pages/configuration/ChangeEmail";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBarComponent />
        <div className="flex flex-row ">
          <SidebarComponent />
          <div className="w-full py-3 px-5 bg-gray-300">
            <Routes>
              <Route
                exact
                path="/"
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
                path={
                  routes["Configuration"]["links"]["Change-email"]["url"]
                }
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
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
