import { useState, useEffect } from "react";
import axios from "../../api/axios";
import { UpdateProcessState } from "../../services/user/staffApi";

export default function UpdateStateBox() {
  const initValue = {
    searchId: "",
    state: "",
  };
  const [formValues, setFormValues] = useState(initValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
    if (!values.searchId) {
      errors.searchId = "SearchId is required";
    }
    if (!values.state) {
      errors.state = "State is required";
    }
    return errors;
  };

  useEffect(async () => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      UpdateProcessState(formValues);
      setIsSuccess(true);
    }
  }, [formErrors]);

  return (
    <>
      <div className="mt-16 flex items-center justify-center ">
        <div className="flex w-[100%] flex-col sm:w-[80%] lg:w-[50%]">
          <div className="">
            <div className=" mt-8 rounded-t-2xl bg-gray-800 px-2 py-4 sm:px-0">
              <h3 className=" px-8 text-xl font-semibold leading-6 text-white">
                Update Order State Form
              </h3>
              <p className="mt-1 px-8 text-sm text-gray-200">
                Please fill the Update Order State Form.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 md:mt-0 ">
            <form onSubmit={handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="searchId"
                        className="block text-sm font-medium text-gray-700"
                      >
                        SearchId
                      </label>
                      <input
                        type="text"
                        name="searchId"
                        id="searchId"
                        autoComplete="searchId"
                        value={formValues.searchId}
                        onChange={handlerChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      <p className="text-red-600">{formErrors.searchId}</p>
                    </div>
                  </div>
                  <div className="col-span-6 mt-4 sm:col-span-3">
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State
                    </label>
                    <select
                      id="state"
                      name="state"
                      autoComplete="state"
                      value={formValues.state}
                      onChange={handlerChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option value={null}>Select order state</option>
                      <option value="pickup">Picked Up</option>
                      <option value="processing">Processing</option>
                      <option value="delivered">Delivered</option>
                    </select>
                    <p className="text-red-600">{formErrors.state}</p>
                    {isSuccess && (
                      <p className="py-2 text-green-500">Update Success.</p>
                    )}
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
