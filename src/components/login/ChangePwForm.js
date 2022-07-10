import { useState, useEffect } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import Alerts from "./Alerts";

export default function ChangePwForm() {
  const initValue = {
    username: "",
    email: "",
    new_password: "",
    question_ans: "",
  };
  const [formValues, setFormValues] = useState(initValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  let navigate = useNavigate();
  const routeChange = () => {
    navigate("../login", { replace: true });
  };
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.new_password) {
      errors.new_password = "New Password is required";
    }
    if (!values.question_ans) {
      errors.question_ans = "Key Question Ans is required";
    }
    return errors;
  };

  useEffect(async () => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      try {
        await axios
          .put(
            "https://shipsheep.herokuapp.com/api/v1/guest/changepw",
            JSON.stringify(formValues),
            { headers: { "Content-Type": "application/json" } }
          )
          .then((data) => {
            setIsSuccess(true);
          });
      } catch (error) {
        console.error(error);
      }
    }
  }, [formErrors]);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        routeChange();
      }, 5000);
    }
  }, [isSuccess]);
  return (
    <>
      <div className="mt-16 flex items-center justify-center ">
        <div className="flex w-[80%] flex-col lg:w-[50%]">
          <div className="">
            {isSuccess && <Alerts />}
            <div className=" mt-8 rounded-t-2xl bg-gray-800 px-2 py-4 sm:px-0">
              <h3 className=" px-8 text-xl font-semibold leading-6 text-white">
                Change Password Form
              </h3>
              <p className="mt-1 px-8 text-sm text-gray-200">
                Please fill the Change Password Form to request the changeing.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        value={formValues.username}
                        onChange={handlerChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      <p className="text-red-600">{formErrors.username}</p>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="email"
                        value={formValues.email}
                        onChange={handlerChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      <p className="text-red-600">{formErrors.email}</p>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="new_password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        New Password
                      </label>
                      <input
                        type="text"
                        name="new_password"
                        id="new_password"
                        autoComplete="new_password"
                        value={formValues.new_password}
                        onChange={handlerChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      <p className="text-red-600">{formErrors.new_password}</p>
                    </div>

                    <div className="col-span-6 mt-6">
                      <p>Which is the best NBA team?</p>
                      <br />
                      <label
                        htmlFor="question_ans"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Key Question:
                      </label>
                      <input
                        type="text"
                        name="question_ans"
                        id="question_ans"
                        autoComplete="question_ans"
                        value={formValues.question_ans}
                        onChange={handlerChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      <p className="text-red-600">{formErrors.question_ans}</p>
                    </div>
                  </div>
                  <div className=" mt-8 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="px- inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
