import { useState, useEffect } from "react";
import Alerts from "../login/Alerts";
import { CreateOrder } from "../../services/user/staffApi";

export default function CreateOrderBox() {
  const initValue = {
    sendUserId: null,
    receiptUserId: null,
    pickupLocationId: null,
    deliveryLocationId: null,
  };
  const [order, setOrder] = useState({});
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
    if (!values.pickupLocationId) {
      errors.pickupLocationId = "Pick Up Location Id is required";
    }
    if (!values.deliveryLocationId) {
      errors.deliveryLocationId = "Delivery Location Id is required";
    }
    return errors;
  };

  useEffect(async () => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setOrder(await CreateOrder(formValues));
      setIsSuccess(true);
    }
  }, [formErrors]);

  return (
    <>
      <div className="mt-16 flex items-center justify-center ">
        <div className="flex w-[50%] flex-col">
          <div className="">
            {isSuccess && <Alerts message={"Create Order Success"} />}
            <div className=" mt-8 rounded-t-2xl bg-gray-800 px-2 py-4 sm:px-0">
              <h3 className=" px-8 text-xl font-semibold leading-6 text-white">
                Create Order Form
              </h3>
              <p className="mt-1 px-8 text-sm text-gray-200">
                Please fill the Create Order Form to create the shipping order.
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
                        htmlFor="sendUserId"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Send UserId
                      </label>
                      <input
                        type="number"
                        name="sendUserId"
                        id="sendUserId"
                        autoComplete="sendUserId"
                        value={formValues.sendUserId}
                        onChange={handlerChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="receiptUserId"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Receipt UserId
                      </label>
                      <input
                        type="number"
                        name="receiptUserId"
                        id="receiptUserId"
                        autoComplete="receiptUserId"
                        value={formValues.receiptUserId}
                        onChange={handlerChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="pickupLocationId"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Pick Up LocationId
                      </label>
                      <input
                        type="number"
                        name="pickupLocationId"
                        id="pickupLocationId"
                        autoComplete="pickupLocationId"
                        value={formValues.pickupLocationId}
                        onChange={handlerChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      <p className="text-red-600">
                        {formErrors.pickupLocationId}
                      </p>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="deliveryLocationId"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Delivery LocationId
                      </label>
                      <input
                        type="number"
                        name="deliveryLocationId"
                        id="deliveryLocationId"
                        autoComplete="deliveryLocationId"
                        value={formValues.deliveryLocationId}
                        onChange={handlerChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      <p className="text-red-600">
                        {formErrors.deliveryLocationId}
                      </p>
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="deliveryLocationId"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Search Id
                      </label>
                      <p className="mt-4 text-2xl font-semibold">
                        {order.searchId}
                      </p>
                      <p className="text-red-600">
                        {formErrors.deliveryLocationId}
                      </p>
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
