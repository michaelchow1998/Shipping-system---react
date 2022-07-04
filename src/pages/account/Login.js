import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import LoginForm from "../../components/login/LoginForm";

export default function Login() {
  const pages = [
    {
      name: "Login",
      href: "login",
      current: true,
    },
  ];

  return (
    <>
      <Breadcrumbs pages={pages} />
      <LoginForm />
    </>
  );
}
