import { useState } from "react";
import "./App.css";
import { UserForm } from "./Components/UserForm";
import { UserTable } from "./Components/UserTable";

function App() {
  const [list, setList] = useState([]);
  const addUser = (userObj) => {
    setList([...list, userObj]);
  };
  console.log(list);
  return (
    <>
      <div
        className="wrapper h-screen text-white flex
       justify-center items-center flex-col"
      >
        <h1 className="text-4xl font-bold mb-4">User List</h1>
        <div className="container h-160 w-140 flex flex-col items-center rounded-md p-4 bg-white text-black shadow-2xl ">
          <UserForm func={addUser} />
          <UserTable list={list} />
        </div>
      </div>
    </>
  );
}

export default App;
