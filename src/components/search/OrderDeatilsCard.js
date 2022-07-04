/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from "@heroicons/react/solid";

export default function OrderDetailsCard({ order, setOpenList }) {
  let closeListBtnHandle = () => {
    setOpenList(false);
  };

  return (
    <div className=" mb-8 overflow-hidden bg-white shadow sm:rounded-lg">
      <div>
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-extrabold leading-6 text-gray-900">
            Order Information
          </h3>
        </div>
        <div className="border-t border-gray-200 px-16 py-5 sm:p-0 lg:px-4">
          <dl className="sm:divide-y sm:divide-gray-200">
            {/* //Search Id */}
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Search Id</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 lg:px-3">
                {order.searchId}
              </dd>
            </div>
            {/* //Delivery User ID */}
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Delivery User ID
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 lg:px-3">
                {order.sendUserId}
              </dd>
            </div>
            {/* //Receipt User ID */}
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Receipt User ID
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 lg:px-3">
                {order.receiptUserId}
              </dd>
            </div>
            {/* //Delivery Date */}
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Delivery Date
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 lg:px-3">
                {order.createdDate}
              </dd>
            </div>
            {/* //Except Receipt Date */}
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Except Receipt Date
              </dt>
              <dd className="mt-1  text-sm text-gray-900 sm:col-span-2 sm:mt-0 lg:px-3">
                {order.expectDate}
              </dd>
            </div>
            {/* //Actual Receipt Date */}
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Actual Receipt Date
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 lg:px-3">
                {order.actualArrivalTime
                  ? order.actualArrivalTime
                  : "Order not yet Arrival"}
              </dd>
            </div>
            {/* //Finish State */}
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Finished</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 lg:px-3">
                {order.finished ? "finished" : "Unfinished"}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="flex items-center justify-center pb-4">
        <button
          type="button"
          onClick={closeListBtnHandle}
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Close
        </button>
      </div>
    </div>
  );
}
