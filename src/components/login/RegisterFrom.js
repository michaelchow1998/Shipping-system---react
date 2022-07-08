import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../api/axios";

export default function RegisterFrom() {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate(-1);
  };

  const initialValues = {
    username: "",
    password: "",
    confirmPw: "",
    firstName: "",
    lastName: "",
    email: "",
    sex: "",
    ans: "",
  };

  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [responseError, setResponseError] = useState("");
  const [regSuccess, setRegSuccess] = useState(false);
  const cancelBtnHandler = () => {};

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log("Form Values: ", formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(async () => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(JSON.stringify(formValues));
      try {
        await axios
          .post("https://shipsheep.herokuapp.com/api/v1/login", {
            headers: { "Content-Type": "application/json" },
            mode: "no-cors",
            body: JSON.stringify(formValues),
          })

          .then(setRegSuccess(true));
      } catch (error) {
        console.error(error);
        setResponseError(error.value);
      }
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.confirmPw) {
      errors.confirmPw = "Confirm Password is required";
    } else if (values.confirmPw !== values.password) {
      errors.confirmPw = "Password and Confirm password must be same";
    }
    if (!values.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.sex) {
      errors.sex = "Sex is required";
    }
    if (!values.phone) {
      errors.phone = "Phone is required";
    } else if (values.phone.length != 8) {
      errors.phone = "Phone is 8 digit";
    }
    if (!values.ans) {
      errors.ans = "Key Question must be answer";
    }
    return errors;
  };

  return (
    <div className="mx-auto w-full max-w-screen-xl space-y-6 space-x-4 px-4 sm:px-6 lg:px-8">
      <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Profile
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form className="space-y-6">
              <div className="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Username
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <div className="flex max-w-lg rounded-md shadow-sm">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        value={formValues.username}
                        onChange={handlerChange}
                        className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <p className="text-red-600">{formErrors.username}</p>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Password
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <div className="flex max-w-lg rounded-md shadow-sm">
                      <input
                        type="text"
                        name="password"
                        id="password"
                        autoComplete="password"
                        value={formValues.password}
                        onChange={handlerChange}
                        className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <p className="text-red-600">{formErrors.password}</p>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <div className="flex max-w-lg rounded-md shadow-sm">
                      <input
                        type="text"
                        name="confirmPw"
                        id="confirm-password"
                        autoComplete="confirm-password"
                        value={formValues.confirmPw}
                        onChange={handlerChange}
                        className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <p className="text-red-600">{formErrors.confirmPw}</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Use a permanent address where you can receive mail.
            </p>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    autoComplete="given-name"
                    value={formValues.firstName}
                    onChange={handlerChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <p className="text-red-600">{formErrors.firstName}</p>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    autoComplete="last-name"
                    value={formValues.lastName}
                    onChange={handlerChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <p className="text-red-600">{formErrors.lastName}</p>
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email-address"
                    autoComplete="email"
                    value={formValues.email}
                    onChange={handlerChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <p className="text-red-600">{formErrors.email}</p>
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    value={formValues.phone}
                    onChange={handlerChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <p className="text-red-600">{formErrors.phone}</p>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="sex"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Sex
                  </label>
                  <select
                    id="sex"
                    name="sex"
                    autoComplete="sex"
                    value={formValues.sex}
                    onChange={handlerChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value={null}>Select your sex</option>
                    <option value="M">M</option>
                    <option value="F">F</option>
                  </select>
                  <p className="text-red-600">{formErrors.sex}</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Special Question
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Which NBA Team is the best in your mind.
            </p>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="col-span-6">
                <label
                  htmlFor="key-answer"
                  className="block text-sm font-medium text-gray-700"
                >
                  Answer
                </label>
                <input
                  type="text"
                  name="ans"
                  id="key-answer"
                  autoComplete="key-answer"
                  value={formValues.ans}
                  onChange={handlerChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <p className="text-red-600">{formErrors.ans}</p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mb-4 flex justify-center pb-4">
        <button
          type="button"
          onClick={routeChange}
          className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Save
        </button>
      </div>
    </div>
  );
}
