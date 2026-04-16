export const UserTable = () => {
  return (
    <>
      <div className="relative overflow-x-auto bg-neutral-primary shadow-lg rounded-md mt-6 p-8 w-full bg-white">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="text-sm text-body border-b border-default">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 bg-neutral-secondary-soft font-medium"
              >
                #
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-neutral-secondary-soft font-medium"
              >
                Gender
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-400">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-heading whitespace-nowrap bg-neutral-secondary-soft"
              >
                1
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4 bg-neutral-secondary-soft">Laptop</td>
            </tr>
            <tr className="border-b border-gray-400">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-heading whitespace-nowrap bg-neutral-secondary-soft"
              >
                2
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4 bg-neutral-secondary-soft">Laptop PC</td>
            </tr>
            <tr className="border-b border-gray-400">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-heading whitespace-nowrap bg-neutral-secondary-soft"
              >
                3
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4 bg-neutral-secondary-soft">
                Accessories
              </td>
            </tr>
            <tr className="border-b border-gray-400">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-heading whitespace-nowrap bg-neutral-secondary-soft"
              >
                4
              </th>
              <td className="px-6 py-4">Gray</td>
              <td className="px-6 py-4 bg-neutral-secondary-soft">Phone</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-heading whitespace-nowrap bg-neutral-secondary-soft"
              >
                5
              </th>
              <td className="px-6 py-4">Red</td>
              <td className="px-6 py-4 bg-neutral-secondary-soft">Wearables</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
