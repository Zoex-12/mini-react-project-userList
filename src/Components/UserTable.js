import { FemaleAvatar, MaleAvatar } from "./Avatar";

export const UserTable = ({ list }) => {
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
              <th
                scope="col"
                className="px-6 py-3 bg-neutral-secondary-soft font-medium"
              >
                Avatar
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
            {list.map(({ gender, name }, i) => {
              return (
                <tr key={i} className="border-b border-gray-400">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-heading whitespace-nowrap bg-neutral-secondary-soft"
                  >
                    {i + 1}
                  </th>
                  <td className="px-6 py-4">
                    {gender === "male" ? <MaleAvatar /> : <FemaleAvatar />}
                  </td>
                  <td
                    style={{ color: gender === "male" ? "blue" : "pink" }}
                    className="px-6 py-4 "
                  >
                    {name}
                  </td>
                  <td className="px-6 py-4 bg-neutral-secondary-soft">
                    {gender}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
