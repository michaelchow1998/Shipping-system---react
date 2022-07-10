export default function OrdersList({
  data,
  description,
  setSearched,
  setSearchId,
}) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Orders</h1>
          <p className="mt-2 text-sm text-gray-700">
            {`A list of all the orders which are ${description}`}
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pr-3 pl-8 text-left text-sm font-semibold text-gray-900 sm:pl-10"
                    >
                      Search Id
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:block"
                    >
                      Create Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 pl-8 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {Object.keys(data).map((order) => (
                    <tr key={data[order].searchId}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-xl font-semibold text-gray-900">
                              {data[order].searchId}
                            </div>
                            <div className="text-gray-500">
                              {data[order].details.currentState}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:block">
                        <div className="text-gray-900">
                          {data[order].createdDate}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold leading-5  ${
                            data[order].finished
                              ? "bg-green-400 text-green-800"
                              : "bg-gray-400 text-black"
                          }`}
                        >
                          {data[order].finished ? "Finished" : "Unfinished"}
                        </span>
                      </td>
                      <td className="first-letter: relative whitespace-nowrap py-4 pr-4 text-sm font-medium sm:pr-6 lg:pl-3 lg:text-right">
                        <button
                          onClick={() => {
                            setSearchId(data[order].searchId);
                            setSearched(true);
                          }}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
