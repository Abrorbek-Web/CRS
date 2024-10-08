import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { Register, Login, Waiting } from "./pages";
import { PublicRoutes } from "./routes";
import { LayoutAdmin, AdminPanel, UserDetails, Projects } from "./admin";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

function AppRoutes() {
  const navigate = useNavigate();

  useEffect(() => {
    // navigate("/register");
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/waiting" element={<Waiting />} />
        </Route>
        <Route
          path="/admin/*"
          element={
            <LayoutAdmin>
              <Routes>
                <Route path="/" element={<AdminPanel />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/details/:id" element={<UserDetails />} />
                {/* <Route path="/list/:id" element={<ListPage />} />
              <Route path="/detail/:id" element={<ReportPage />} /> */}
                {/* <Route path="/detailModal/:id" element={<DetailModel />} /> */}
                {/* Add more routes here */}
              </Routes>
            </LayoutAdmin>
          }
        />
      </Routes>
    </>
  );
}

export default App;
