export default function LocationTable({ datalist, area, bg }) {
  // console.log(props);

  //status
  const state_color = (state) => {
    console.log(state);
    if (state === "active") {
      return "bg-green-400 text-green-800";
    } else {
      return "bg-gray-400 text-white px-[17px]";
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <h1 className={`${bg}  flex items-center py-2 pl-5 text-white`}>
                {area}
              </h1>

              <table className="min-w-full divide-y ">
                <thead className="bg-gray-200">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Location ID
                    </th>
                    <th
                      scope="col"
                      className=" px-3 py-3.5 pr-40 text-left text-sm font-semibold text-gray-900 "
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {datalist.map((location) => (
                    <tr key={location.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {location.id}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className=" whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">{location.name}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span
                          className={`inline-flex rounded-full ${state_color(
                            location.state
                          )} px-2 text-xs font-semibold leading-5 `}
                        >
                          {location.state}
                        </span>
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
