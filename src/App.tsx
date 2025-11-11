import { useState } from "react";
import Login from "./components/login";
import Singup from "./components/Singup";
import TodoList from "./components/TodoList";
import { useGetTodoQuery } from "./services/todoApiSlice";

function App() {
  const [signUp, setSignUp] = useState(false);
  const { data, isLoading, isError } = useGetTodoQuery({});

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error in fetching</div>;
  return (
    <>
      <Login />
      <button
        onClick={() => setSignUp(!signUp)}
        className=" border-8 bg-pink-500 ml-220"
      >
        Show Signup
      </button>
      {signUp && <Singup />}
      <TodoList todos={data.todos} />
    </>
  );
}
export default App;
