//import Route
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { refreshToken } from "./services/token/auth.service";
//import Nav Bar
import NavBar from "./components/Navbar";
//import Pages
import Home from "./pages/Home";
import SearchOrder from "./pages/SearchOrder";
import Locations from "./pages/Locations";
import Register from "./pages/account/Register";
import Login from "./pages/account/Login";
import ChangePW from "./pages/account/ChangePW";
import Contact from "./pages/Contact";

//dashboard
import StaffDashboard from "./pages/dashboard/StaffDashboard";
import UserDashboard from "./pages/dashboard/UserDashboard";

//404 Page
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [isStaffLogin, setIsStaffLogin] = useState(false);

  useEffect(() => {
    try {
      refreshToken();
      if (localStorage.getItem("access_token")) {
        setIsLogin(true);
        if (localStorage.getItem("roles") === "[ROLE_ADMIN]") {
          setIsStaffLogin(true);
          setIsUserLogin(true);
        }
        if (localStorage.getItem("roles") === "[ROLE_STAFF]") {
          setIsStaffLogin(true);
        }
        if (localStorage.getItem("roles") === "[ROLE_USER]") {
          setIsUserLogin(true);
        }
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Router>
      <NavBar
        isLogin={isLogin}
        isUserLogin={isUserLogin}
        isStaffLogin={isStaffLogin}
        setIsLogin={setIsLogin}
        setIsStaffLogin={setIsStaffLogin}
        setIsUserLogin={setIsUserLogin}
      />
      <Routes>
        //Guest function
        <Route element={<Home isLogin={isLogin} />} path={"/"}></Route>
        <Route element={<SearchOrder />} path={"/search"}></Route>
        <Route element={<Locations />} path={"/locations"}></Route>
        <Route element={<Contact />} path={"/contact"}></Route>
        //Login function
        <Route element={<Register />} path={"/login/register"}></Route>
        <Route
          element={
            <Login
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              setIsUserLogin={setIsUserLogin}
              setIsStaffLogin={setIsStaffLogin}
            />
          }
          path={"/login"}
        ></Route>
        <Route
          element={<ChangePW />}
          path={"/login/request-password-reset"}
        ></Route>
        //dashboard
        <Route element={<UserDashboard />} path={"/admin/dashboard"}></Route>
        <Route element={<StaffDashboard />} path={"/staff/dashboard"}></Route>
        <Route element={<UserDashboard />} path={"/user/dashboard"}></Route>
        //404
        <Route element={<NotFoundPage />} path={"*"}></Route>
      </Routes>
    </Router>
  );
}

export default App;
