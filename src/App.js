//import Route
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
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
import UserDashboard from "./pages/dashboard/UserDashboard";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [isStaffLogin, setIsStaffLogin] = useState(false);
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  return (
    <Router>
      <NavBar
        isLogin={isLogin}
        isUserLogin={isUserLogin}
        isStaffLogin={isStaffLogin}
        isAdminLogin={isAdminLogin}
        setIsLogin={setIsLogin}
        setIsAdminLogin={setIsAdminLogin}
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
              setIsAdminLogin={setIsAdminLogin}
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
        <Route element={<UserDashboard />} path={"/staff/dashboard"}></Route>
        <Route element={<UserDashboard />} path={"/user/dashboard"}></Route>
      </Routes>
    </Router>
  );
}

export default App;
