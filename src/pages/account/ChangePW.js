import Breadcrumbs from "../../components/Breadcrumbs";
import ChangePwForm from "../../components/login/ChangePwForm";
function ChangePW() {
  const pages = [
    {
      name: "Login",
      href: "",
      current: false,
    },
    {
      name: "ChangePw",
      href: "",
      current: true,
    },
  ];
  return (
    <div>
      <Breadcrumbs pages={pages} />
      <ChangePwForm />
    </div>
  );
}

export default ChangePW;
