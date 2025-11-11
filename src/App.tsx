import Login from "./components/login";
import TodoList from "./components/TodoList";
import { useGetTodoQuery } from "./services/todoApiSlice";

function App() {
  const { data, isLoading, isError } = useGetTodoQuery({});

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error in fetching</div>;
  return (
    <>
      <Login/>
      <TodoList todos={data.todos} />
    </>
  );
}
export default App;
