import { useState } from "react";

export const UserForm = ({ func }) => {
  const [user, setUser] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    func(user);
  };

  return (
    <>
      <form
        onSubmit={handleOnSubmit}
        action=""
        className="grid grid-cols-1 md:grid-cols-12 gap-2 w-80 md:w-full shadow-lg p-3 mt-2 bg-white"
      >
        <div className="md:col-span-3">
          <div className="mt-2 grid grid-cols-1">
            <select
              name="gender"
              required
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              onChange={handleOnChange}
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            >
              <path
                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="md:col-span-6 mt-2">
          <input
            name="name"
            type="text"
            aria-label="user name"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            placeholder="User name"
            required
            onChange={handleOnChange}
          />
        </div>
        <div className="md:col-span-3 grid   mt-2">
          <button className="text-white bg-blue-500 rounded-md cursor-pointer hover:bg-sky-400 transition ease duration-150 py-2 md:py-1 font-semibold">
            Add User
          </button>
        </div>
      </form>
    </>
  );
};
