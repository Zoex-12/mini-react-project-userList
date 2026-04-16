import "./App.css";
import { UserForm } from "./Components/UserForm";

function App() {
  return (
    <>
      <div
        className="wrapper h-screen text-white flex
       justify-center items-center flex-col"
      >
        <h1 className="text-4xl font-bold mb-4">User List</h1>
        <div className="container h-150 w-120 border-3 rounded-md p-4">
          <UserForm />
        </div>
      </div>
    </>
  );
}

export default App;
