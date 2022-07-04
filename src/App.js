//import Route
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        //Guest function
        <Route element={<Home />} path={"/"}></Route>
        <Route element={<SearchOrder />} path={"/search"}></Route>
        <Route element={<Locations />} path={"/locations"}></Route>
        <Route element={<Contact />} path={"/contact"}></Route>
        //Login function
        <Route element={<Register />} path={"/login/register"}></Route>
        <Route element={<Login />} path={"/login"}></Route>
        <Route element={<ChangePW />} path={"/request-password-reset"}></Route>
      </Routes>
    </Router>
  );
}

export default App;
