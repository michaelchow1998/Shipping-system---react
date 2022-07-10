import { useState, useEffect } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import lama from "../../images/lama256.png";

export default function LoginForm({
  isLogin,
  setIsLogin,
  setIsUserLogin,
  setIsStaffLogin,
}) {
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [responseError, setResponseError] = useState(false);
  const [jwtTokens, setJwtTokens] = useState({});

  let navigate = useNavigate();
  const routeChange = () => {
    navigate("../", { replace: true });
  };
  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(async () => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      try {
        await axios
          .post(
            "https://shipsheep.herokuapp.com/api/v1/login",
            JSON.stringify(formValues)
          )
          .then((data) => {
            setJwtTokens(data.data);
            routeChange();
          });
        setResponseError(false);
      } catch (error) {
        console.error(error);
        setResponseError(true);
      }
    }
  }, [formErrors]);

  useEffect(() => {
    if (jwtTokens.roles == "[ROLE_ADMIN]") {
      setIsLogin(true);
      setIsStaffLogin(true);
      setIsUserLogin(true);
    }
    if (jwtTokens.roles == "[ROLE_STAFF]") {
      setIsLogin(true);
      setIsStaffLogin(true);
    }
    if (jwtTokens.roles == "[ROLE_USER]") {
      setIsLogin(true);
      setIsUserLogin(true);
    }

    localStorage.setItem("roles", jwtTokens.roles);
    localStorage.setItem("username", formValues.username);
    localStorage.setItem("access_token", jwtTokens.access_token);
    localStorage.setItem("refresh_token", jwtTokens.refresh_token);
  }, [jwtTokens]);

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="bg- sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-28 w-auto rounded-full bg-gray-800 px-4 py-4"
          src={lama}
          alt="lama"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 flex justify-center text-lg font-semibold text-red-600">
          {responseError && "Some Login Information may not correct"}
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  value={formValues.username}
                  onChange={handlerChange}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <p className="text-red-600">{formErrors.username}</p>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formValues.password}
                  onChange={handlerChange}
                  autoComplete="current-password"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <p className="text-red-600">{formErrors.password}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  to="request-password-reset"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <Link
                  to="register"
                  className="ml-16 inline-flex w-56 justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 lg:ml-20"
                >
                  <p className=" px-2">Create Account now</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
