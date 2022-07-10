import Breadcrumbs from "../../components/Breadcrumbs";
import RegisterFrom from "../../components/login/RegisterFrom";

export default function Register() {
  const pages = [
    {
      name: "Login",
      href: "",
      current: false,
    },
    {
      name: "Register",
      href: "",
      current: true,
    },
  ];
  return (
    <div>
      <Breadcrumbs pages={pages} />
      <RegisterFrom />
    </div>
  );
}
