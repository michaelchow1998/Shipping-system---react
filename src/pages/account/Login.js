import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import LoginForm from "../../components/login/LoginForm";
import LoginedPage from "./Logined";

export default function Login({
  isLogin,
  setIsLogin,
  setIsUserLogin,
  setIsStaffLogin,
}) {
  const pages = [
    {
      name: "Login",
      href: "",
      current: true,
    },
  ];

  return (
    <>
      <Breadcrumbs pages={pages} />
      {isLogin && <LoginedPage />}
      {!isLogin && (
        <LoginForm
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          setIsUserLogin={setIsUserLogin}
          setIsStaffLogin={setIsStaffLogin}
        />
      )}
    </>
  );
}
